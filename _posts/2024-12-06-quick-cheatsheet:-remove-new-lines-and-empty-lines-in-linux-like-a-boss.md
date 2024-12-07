---
title: "Quick Cheatsheet: Remove New Lines and Empty Lines in Linux"
date: 2024-12-06T12:30:27+00:00
layout: post
categories:
  - Linux
  - Programming
tags:
  - Command Line
  - Productivity
toc:
  sidebar: right
description: "This article breaks down some quick commands to tidy up files in Linux by removing unwanted new lines and those pesky empty lines. Keep your files clean and readable without breaking a sweat!"
---
---

You know how sometimes you’re knee-deep in some file, and it’s just cluttered with new lines or annoying empty lines? Yeah, that’s the kind of crap that can drive you mad. Don’t you wish there was an easy way to wipe that all away? Well, I've got your back. Get ready to transform your files into neat little packages with just a few commands.

### Removing New Lines

First off, let’s tackle those pesky new lines. Sometimes, you end up with new lines all over the place, messing up your formatting. Here’s a quick command you can run to sweep them away.

```bash
# Use this command to remove all new lines
tr -d '\n' < input.txt > output.txt
```

This little gem uses `tr` (translate or delete characters). It takes our beloved input file, targets new lines with `-d '\n'`, and outputs a cleaned-up version in `output.txt`. Pretty cool, right?

But if you only want to remove **trailing** new lines rather than every single one, you can use `sed` like this:

```bash
# To trim trailing new lines only
sed '/^$/d' input.txt > output.txt
```

This one-liner gets rid of empty lines. The `^$` regex matches any lines that start and end with nothing (a.k.a. empty lines). The `d` command deletes those lines.

### Removing Empty New Lines

Okay, now let’s get to that annoying issue of empty new lines, which just clutter up your file without adding any value. Here's another handy command:

```bash
# Removing consecutive empty lines
sed '/^$/N;/^\n$/D' input.txt > output.txt
```

This one uses `sed` again, and is a bit of a magic trick. What happens here is we look for empty lines and merge them (`N`) with the next line, then delete (`D`) if both are empty. Result? You get a file that’s compact and clean!

### Additional Hacks

You might want to ensure that there are *no* empty lines either at the start or the end of your file. Here’s a two-in-one command to handle that:

```bash
# Primary command to remove empty lines throughout the file and trim the ends
sed -i '/^$/d; /^$/N; /^\n$/D' input.txt
```

This `-i` option edits files in place. Yup, there’s no output redirection here—your original file gets the treatment and comes out sparkling clean.

### Not Just Text Files!

You don’t just have to limit this to text files, either! If you're working with other types of files, sometimes using `tr` or `sed` can help with quick and dirty edits without needing to open a GUI editor. Just be cautious, ‘cause you could mess something up if you’re not careful.

### Conclusion

So there you have it, folks! A quick cheatsheet to help you out when lines get out of hand. You no longer have to deal with end-of-the-world scenarios caused by messy files. Your code will thank you, and you can keep your sanity intact whilst making your files readable again.

### References
- [GNU `tr`](https://www.gnu.org/software/coreutils/manual/html_node/tr.html)
- [GNU `sed`](https://www.gnu.org/software/sed/manual/sed.html) 
