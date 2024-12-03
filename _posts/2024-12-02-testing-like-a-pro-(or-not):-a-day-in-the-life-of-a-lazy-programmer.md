---
title: "Testing Like a Pro (Or Not): A Day in the Life of a Lazy Programmer"
date: 2024-12-02 19:25:10 -0000
categories: [[Testing, Software Development]]
tags: [[Code Quality, Development Process]]
mermaid: true
toc: true
---

---

Welcome back, fellow code cowboys and cowgirls! Let’s dive into a topic that’s as exciting as watching paint dry—testing. But hey, I promise it’s slightly more thrilling than my couch-surfing weekends. Today, I’m penning my thoughts on how I approach testing (or often don’t). Buckle up, 'cause it’s about to get real...and mildly chaotic!

### Why the Hell Do We Test?

If you're anything like me, you’ve probably asked yourself why the heck we even bother testing in the first place. I mean, shouldn’t our code just *work*? I can’t be the only dev who’s opened a project, eyes glazed over, only to think, “Ain't nobody got time for that!” But, surprise! Testing is essential or you’ll end up that guy who breaks production right before the Friday beer run. 

---
### Types of Testing (Pick Your Poison)

Let’s get one thing straight: there’s a ton of different tests out there, and figuring out which one to use is about as easy as finding your phone in a couch full of chips.

1. **Unit Testing**: This is where you test individual parts of your code. Think of it as feeding your cat and making sure it doesn’t just hiss at you. Here’s how to do a simple unit test in Python using `unittest`.

   ```python
   import unittest

   def add(a, b):
       return a + b

   class TestAddFunction(unittest.TestCase):
       def test_positive_numbers(self):
           self.assertEqual(add(2, 3), 5)

       def test_negative_numbers(self):
           self.assertEqual(add(-1, -1), -2)

   if __name__ == '__main__':
       unittest.main()
   ```

   Just run this and you’ll know if the function works without debugging furiously at 2 AM.

2. **Integration Testing**: This is where you ensure that different pieces of your app work together like a dysfunctional family at Christmas. In this scenario, you might be using something like `pytest`:

   ```python
   # Assume we have a function that connects to a database
   def fetch_data_from_db(query):
       # Dummy database fetch
       return {"data": "Hello World!"}

   def test_fetch_data():
       response = fetch_data_from_db("SELECT * FROM test")
       assert response["data"] == "Hello World!"
   ```

Each time you run tests, it feels like a mini-victory. Who doesn’t love that warm fuzzy feeling?

3. **End-to-End Testing**: Now we’re talking full-scale testing. This is the testing equivalent of getting your mom to cook for you. Everything in one shot! Using a tool like Selenium, you can automate your web app testing.

   ```python
   from selenium import webdriver

   def test_login():
       driver = webdriver.Chrome()
       driver.get("https://example.com/login")
       
       username = driver.find_element_by_id("username")
       password = driver.find_element_by_id("password")
       login_button = driver.find_element_by_id("submit")

       username.send_keys("myusername")
       password.send_keys("mypassword")
       login_button.click()
       
       assert "Welcome" in driver.page_source
       driver.quit()
   ```

This is your chance to act like a user and see if your app can handle their shenanigans.

### The Blockers: Grumpy Test Cases

Believe it or not, I face blockers, and they suck. The biggest offenders? 

- **Dependencies**: You change one tiny thing, and suddenly everything breaks. It’s like a domino effect, and you’re standing there like, “What the actual hell?!”

- **Flaky Tests**: You know, those tests that sometimes pass and sometimes fail? When you have one of those, it feels like a bad Tinder date. You’re just left confused and frustrated.

- **Environment Issues**: Nothing is more annoying than a working code on your local machine but failing miserably in production. It’s like bringing a sweet date home only for them to see the mess you call a life.

### Making Friends with Mocks

Let’s talk about mocks. When you don’t want to deal with dependencies, right? Mocks save the day! Here, I’ll throw in an example that uses the `unittest.mock` module.

```python
from unittest.mock import patch

def get_user_data(user_id):
    # Imagine this function hits the database
    return database.get_user(user_id)

@patch('module_name.database')
def test_get_user_data(mock_db):
    mock_db.get_user.return_value = {"name": "John Doe"}
    
    result = get_user_data(1)
    assert result == {"name": "John Doe"}
```

With this, you’ll get to test how your code reacts to the data without dealing with the database directly. It’s the lazy programmer’s best friend!

### The Bottom Line: Test or Be Tested!

In the end, testing isn’t just a checkbox on the to-do list—it’s a hint of sanity in this chaotic coding world. All the cool kids are doing it, and, as much as I hate to admit it, it does save your ass more often than not.

Remember, you’re a developer, not a magician. Things break; it’s just part of the job. Get comfy with testing, and you’ll save not just your sanity but also the production deployment party you’ve been looking forward to.

References:
- [Python unittest documentation](https://docs.python.org/3/library/unittest.html)  
- [pytest documentation](https://docs.pytest.org/en/stable/)  
- [Selenium documentation](https://www.selenium.dev/documentation/en/)  

Now go out there and get your testing game on! Happy coding!
