export function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      // For Safari
      (document as any).webkitExitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      // For Firefox
      (document as any).mozCancelFullScreen();
    } else if ((document as any).msExitFullscreen) {
      // For IE/Edge
      (document as any).msExitFullscreen();
    }
  }
  