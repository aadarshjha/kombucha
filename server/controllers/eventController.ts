import Event from "../models/events"

export const list = (req: Express.Request, res: Express.Response, next: unknown): any => {
    Event.find().exec(function (err: unknown, list_events: unknown) {
        /*
         if (err) {
           return next(err);
         }
         */
        res.send("events_list", { title: "Events List", list_events: list_events });
    });
};

/*
  export const createPost = (req: Request, res: unknown, next: unknown): unknown => {
    Event.find().exec(function (err: unknown, list_events: unknown) {
      if (err) {
        return next(err);
      }
      res.send("genre_list", { title: "Genre List", list_genres: list_genres });
    });
  };
*/