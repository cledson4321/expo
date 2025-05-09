import { MailClient, MailComposerOptions, MailComposerResult } from './MailComposer.types';
/**
 * Retrieves a list of available email clients installed on the device.
 * This can be used to present options to the user for sending emails through their preferred email client,
 * or to open an email client so the user can access their mailbox — for example, to open a confirmation email sent by your app.
 * @returns An array of available mail clients.
 */
export declare function getClients(): MailClient[];
/**
 * Opens a mail modal for iOS and a mail app intent for Android and fills the fields with provided
 * data. On iOS you will need to be signed into the Mail app.
 * @return A promise fulfilled with an object containing a `status` field that specifies whether an
 * email was sent, saved, or cancelled. Android does not provide this info, so the status is always
 * set as if the email were sent.
 */
export declare function composeAsync(options: MailComposerOptions): Promise<MailComposerResult>;
/**
 * Determine if the `MailComposer` API can be used in this app.
 * @return A promise resolves to `true` if the API can be used, and `false` otherwise.
 * - Returns `true` when the device has a default email setup for sending mail.
 * - Can return `false` on iOS if an MDM profile is setup to block outgoing mail. If this is the
 * case, you may want to use the Linking API instead.
 * - Always returns `true` in the browser.
 */
export declare function isAvailableAsync(): Promise<boolean>;
export * from './MailComposer.types';
//# sourceMappingURL=MailComposer.d.ts.map