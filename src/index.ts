import {useState,useCallback} from 'react';

interface FsDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface FsDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export function isFullScreen(): boolean {
  const fsDoc = document as FsDocument;

  return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
}

export default function useFullscreen() {
  const [isFullscreen,setIsFullscreen] = useState<boolean>(false),
        toggle = useCallback(() => {
          if(!isFullScreen()){
            const element = document.documentElement as FsDocumentElement;
            if (element.requestFullscreen) {
              element.requestFullscreen();
              setIsFullscreen(true);
            } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
              setIsFullscreen(true);
            } else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen();
              setIsFullscreen(true);
            } else if (element.msRequestFullscreen) {
              element.msRequestFullscreen();
              setIsFullscreen(true);
            }
          } else {
            const fsDoc = document as FsDocument;
            if (fsDoc.exitFullscreen) {
              fsDoc.exitFullscreen();
              setIsFullscreen(false);
            } else if (fsDoc.mozCancelFullScreen) {
              fsDoc.mozCancelFullScreen();
              setIsFullscreen(false);
            } else if (fsDoc.webkitExitFullscreen) {
              fsDoc.webkitExitFullscreen();
              setIsFullscreen(false);
            } else if (fsDoc.msExitFullscreen) {
              fsDoc.msExitFullscreen();
              setIsFullscreen(false);
            }
          }
        }, [])

  return [isFullscreen,toggle] as const
}
