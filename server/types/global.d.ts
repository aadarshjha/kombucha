export {};
// NOTE: This currently isn't being used as it doesn't work. Keeping it because ideally we can use it in the future.
declare global {
  interface controller {
    (
      req: Express.Request,
      res: Express.Response,
      next: (err: Error) => void
    ): void;
  }
}
