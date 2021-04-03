/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// import assert from "assert";
const fetch = require("node-fetch");
const chai = require("chai");
const expect = chai.expect;

/*
INCLUDES testing for all CRUD for events, Create for learn

*/

const PORT = process.env.PORT || 5000;
console.log("PORT:", PORT);

const url = (inp) => `http://localhost:${PORT}${inp}`;

const events = {
  list: url("/events/"),
  create: url("/events/create/"),
  delete: (id) => url(`/events/${id}/delete/`),
  update: (id) => url(`/events/${id}/update/`),
};

const authors = {
  list: url("/learn/authors"),
  create: url("/learn/author/create"),
  delete: (id) => url(`/learn/author/${id}/delete`),
  update: (id) => url(`/learn/author/${id}/update`),
  get: (id) => url(`/learn/author/${id}`),
};

const articles = {
  list: url("/learn/articles"),
  create: url("/learn/article/create"),
  delete: (id) => url(`/learn/article/${id}/delete`),
  update: (id) => url(`/learn/article/${id}/update`),
  get: (id) => url(`/learn/article/${id}`),
};

const topics = {
  list: url("/learn/topics"),
  create: url("/learn/topic/create"),
  delete: (id) => url(`/learn/topic/${id}/delete`),
  update: (id) => url(`/learn/topic/${id}/update`),
  get: (id) => url(`/learn/topic/${id}`),
};

describe("/events API Endpoints", async () => {
  // Testing Create functionality
  let testEventID;
  it("Testing create event", async () => {
    await fetch(events.create, {
      method: "PUT",
      body: JSON.stringify({
        title: "TestTitle",
        image: "TestImage",
        body: "TestBody",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const testEvent = (
      await fetch(events.list).then((res) => res.json())
    ).slice(-1)[0];
    testEventID = testEvent["_id"];
    expect(testEvent).to.deep.equal({
      title: "TestTitle",
      image: "TestImage",
      body: "TestBody",
      __v: 0,
      _id: testEventID,
    });
  });

  // Testing Update functionality
  it("Testing partially update event", async () => {
    await fetch(events.update(testEventID), {
      method: "PATCH",
      body: JSON.stringify({
        title: "TestTitle2",
        body: "TestBody2",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const testEvent = (
      await fetch(events.list).then((res) => res.json())
    ).slice(-1)[0];
    expect(testEvent).to.deep.equal({
      title: "TestTitle2",
      image: "TestImage",
      body: "TestBody2",
      __v: 0,
      _id: testEventID,
    });
  });

  // Testing Delete functionality
  it("Testing delete event", async () => {
    await fetch(events.delete(testEventID), {
      method: "DELETE",
    });

    const testEvents = (
      await fetch(events.list).then((res) => res.json())
    ).slice(-1);
    const result = testEvents.find((event) => event["_id"] === testEventID);
    expect(result).to.equal(undefined);
  });
});

describe("/learn API endpoints", async () => {
  let testAuthorID;
  let testTopicID;
  let testArticleID;

  it("Testing create author", async () => {
    await fetch(authors.create, {
      method: "PUT",
      body: JSON.stringify({
        name: "TestName",
        year: "TestYear",
        majors: ["Major1", "Major2", "Major3"],
      }),
      headers: { "Content-Type": "application/json" },
    });

    const testAuthor = (
      await fetch(authors.list).then((res) => res.json())
    ).slice(-1)[0];
    testAuthorID = testAuthor["_id"];
    expect(testAuthor).to.deep.equal({
      name: "TestName",
      year: "TestYear",
      majors: ["Major1", "Major2", "Major3"],
      __v: 0,
      _id: testAuthorID,
    });
  });

  it("Testing create topic", async () => {
    await fetch(topics.create, {
      method: "PUT",
      body: JSON.stringify({
        name: "TestName",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const testTopic = (
      await fetch(topics.list).then((res) => res.json())
    ).slice(-1)[0];
    testTopicID = testTopic["_id"];
    expect(testTopic).to.deep.equal({
      name: "TestName",
      _id: testTopicID,
    });
  });

  it("Testing create article", async () => {
    await fetch(articles.create, {
      method: "PUT",
      body: JSON.stringify({
        title: "TestArticle",
        author: testAuthorID,
        dateUpdated: "3/3/2003",
        topic: testTopicID,
        content: "TestContent",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const testArticle = (
      await fetch(articles.list).then((res) => res.json())
    ).slice(-1)[0];
    testArticleID = testArticle["_id"];
    expect(testArticle).to.deep.equal({
      title: "TestArticle",
      author: {
        _id: testAuthorID,
        name: "TestName",
      },
      dateUpdated: "2003-03-03T06:00:00.000Z",
      topic: {
        _id: testTopicID,
        name: "TestName",
      },
      content: "TestContent",
      __v: 0,
      _id: testArticleID,
    });
  });
});
