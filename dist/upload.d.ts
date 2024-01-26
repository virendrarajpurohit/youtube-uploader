import { Credentials, Video, VideoToEdit, Comment, MessageTransport } from './types';
import { PuppeteerNodeLaunchOptions } from 'puppeteer';
/**
 * import { upload } from 'youtube-videos-uploader'
 * or
 * const { upload } = require('youtube-videos-uploader');
 */
export declare const upload: (credentials: Credentials, videos: Video[], puppeteerLaunch?: PuppeteerNodeLaunchOptions, messageTransport?: MessageTransport) => Promise<string[]>;
export declare const update: (credentials: Credentials, videos: VideoToEdit[], puppeteerLaunch?: PuppeteerNodeLaunchOptions, messageTransport?: MessageTransport) => Promise<void[]>;
export declare const comment: (credentials: Credentials, comments: Comment[], puppeteerLaunch?: PuppeteerNodeLaunchOptions, messageTransport?: MessageTransport) => Promise<unknown[]>;
//# sourceMappingURL=upload.d.ts.map