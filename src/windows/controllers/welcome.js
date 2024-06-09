const { BrowserWindow } = require('electron')

class WelcomeWindow {
    constructor() {
        this.welcomeWindow = new BrowserWindow({
            width: 800,
            height: 600,
            title: 'Test',
            resizable: false,
            center: true,
            show: true,
            frame: false,
            autoHideMenuBar: true,
            alwaysOnTop: true,
            titleBarStyle: 'hidden',
        });

        this.welcomeWindow.loadURL(`file://${path.join(__dirname, '/../views/welcome.html')}`);
        this.isShown = false;
    }

    show() {
        this.welcomeWindow.show();
        this.isShown = true;
    }

    hide() {
        this.welcomeWindow.hide();
        this.isShown = false;
    }
}

module.exports = WelcomeWindow;
