
class LoginPage {
    private get usernameInput() { return $('#user_id'); }
    private get passwordInput() { return $('#password'); }
    private get loginButton() { return $('#entry-login'); }
    private get agreeButton() { return $('#agree_button'); }
  
    public async open() {
      await browser.url('https://ultra-felipe-santana-qa.dev-public.bbpd.io/');
    }

    public async agree() {
      await this.agreeButton.waitForClickable();
      await this.agreeButton.click();
    }
  
    public async login(username: string, password: string) {
      await this.usernameInput.waitForDisplayed();
      await this.usernameInput.setValue(username);
      await this.passwordInput.waitForDisplayed();
      await this.passwordInput.setValue(password);
      await this.loginButton.waitForClickable();
      await this.loginButton.click();
    }

  }
  
  export const loginPage = new LoginPage();