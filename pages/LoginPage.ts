import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";
import UserCredentials from "../helpers/USerCredentials";

export default class LoginPage {

    userNameField: Locator;
    passwordField: Locator;
    loginBtn: Locator;

    constructor(protected page: Page) {
        this.userNameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginBtn = this.page.locator('[data-test="login-button"]');
    }

    async loginToApplication(username: string = UserCredentials.STANDARD_USER,
         password: string = UserCredentials.USER_PASSWORD, 
         url: string = ApplicationURL.BASE_URL) {
        await this.page.goto(url);
        await this.validatePageUrl(ApplicationURL.BASE_URL)
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
        await this.validatePageUrl(`${ApplicationURL.BASE_URL}/inventory.html`)
    }

    async validatePageUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

}