---
title: "Tackling Dhaidh: When Dependencies Go Rogue"
date: 2024-12-02 19:24:23 -0000
categories: [[Software Development, Troubleshooting]]
tags: [[Dependencies, Debugging]]
mermaid: true
toc: true
---

---

Alright folks, let’s dive into the frustratingly familiar territory of dependencies gone rogue, or what I like to call “Dhaidh”. If you've ever grappled with the mess that comes with trying to manage your application's dependencies, you know exactly what I'm talking about. This isn’t some mythical beast—it's a reality that gets under our skin as developers constantly trying to keep our projects running smoothly.

## What is Dhaidh?

So, Dhaidh isn’t exactly a glamorous term, but it’s one that I coined to describe those days when dependencies decide to act all out of line. You know those sweet libraries you think you can rely on? Yeah, they might just betray you when you least expect it. It’s like a bad date—everything seems fine until you find out they have a dozen other issues you weren’t aware of.

You start off with a project that runs like a dream. Then you update a single package, and boom! Your app crashes, the console shows errors that look like hieroglyphics, and you’re left tearing your hair out. Here’s a quick glance at what can happen:

```javascript
// Example of a simple app dependency
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/data', (req, res) => {
    // Processing data
    res.send('Data received!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

This code works beautifully until you decide to update `body-parser` because of some shiny new feature. Next thing you know, it breaks your app! Why? Because that update is no longer compatible with the way other parts of your app are set up. The journey into Dhaidh begins. 

## Symptoms of Dhaidh

These little gremlins often rear their ugly heads through some common symptoms:

1. **Version Conflicts**: "Why the hell did I ever use that version? AH!"
2. **Missing Dependencies**: When your package manager says “hey, I thought you needed x” but it’s not installed? Fml.
3. **Unexpected Behavior**: Features that worked yesterday suddenly decide to 404 today because some maintainer thought it’d be fun to change the API. How cute.

## The Fight Against Dhaidh

Now that we’ve identified Dhaidh, how do we fight against it? Buckle up, because here are some methods I’ve found super helpful in keeping Dhaidh at bay.

### 1. Use Dependency Locking

One surefire way to keep dependencies stable is to use a lock file. For npm and yarn, these are `package-lock.json` and `yarn.lock`, respectively. If you aren't using them, start right away! They’ll save your ass when a new version of a package fucks things up. 

Here’s how to get your lock file going:

```bash
// For npm
npm install

// For yarn
yarn install
```

Those files will capture the exact version of all the packages you are using and their dependencies.

### 2. Rely on Version Ranges

When specifying your dependencies in `package.json`, instead of going full-on living-on-the-edge with a wildcard like `"body-parser": "*"`, use version ranges to limit updates to minor or patch versions.

```json
"dependencies": {
  "body-parser": "^1.19.0" // This allows updates to 1.19.x, but not 1.20.0
}
```

### 3. Regular Updates with Caution

Keep your dependencies up to date, but do it regularly. Set a schedule (I’m looking at you, monthly). 

You can easily check for outdated packages using:

```bash
// For npm
npm outdated

// For yarn
yarn outdated
```

This keeps you in check and allows you to spot potential Dhaidh before they can become a full-on crisis.

### 4. Write Tests for Critical Functions

Seriously, if you aren’t writing tests, you should consider it. Writing unit tests will save your butt. You’ll be able to run your tests after every dependency update and catch simmering issues before they explode.

Here’s a basic Jest test example:

```javascript
const request = require('supertest');
const app = require('../app'); // your express app

describe('POST /data', () => {
    it('responds with data received', async () => {
        const res = await request(app)
            .post('/data')
            .send({ key: 'value' });
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Data received!');
    });
});
```

### 5. Document Everything

Make sure you document every change you make due to dependency updates. This will help spot trends with specific libraries, and save you headaches in the future. No more, "Wait, why did I add this again?" moments.

## Conclusion 

In the end, Dhaidh is an annoying part of life as a developer that we can't completely eradicate, but we can manage it like a pro. By taking simple precautions and being vigilant, you can avoid those “what the hell happened” moments in your development process. Who knew that managing dependencies could feel like wrangling cats? It can be a time-sucking mess, but with these strategies, you can keep your codebase cleaner and more reliable.

References:
- [npm Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://classic.yarnpkg.com/en/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
  
Happy coding and may your dependencies be ever in your favor!
