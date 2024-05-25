export class Timer {
    private duration: number;
    private intervalId: NodeJS.Timeout | null;
    private callback: (remainingTime: number) => void;
  
    constructor(duration: number, callback: (remainingTime: number) => void) {
      this.duration = duration;
      this.intervalId = null;
      this.callback = callback;
    }
  
    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.duration--;
          if (this.duration >= 0) {
            this.callback(this.duration);
          } else {
            this.stop();
          }
        }, 1000);
      }
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }