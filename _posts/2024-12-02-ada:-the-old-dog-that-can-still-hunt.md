---
title: "Ada: The Old Dog That Can Still Hunt"
date: 2024-12-02 19:23:29 -0000
categories: [[Programming Languages, Software Development]]
tags: [[Ada, Programming]]
mermaid: true
toc: true
---

---

So, let’s talk about Ada. No, I’m not talking about your neighbor's dog named Ada; I’m referring to that old-school programming language named after Ada Lovelace, the first computer programmer (go figure!). 

You might be wondering, "Why the hell should I care about this ancient language?" Well, my friend, I’m here to spill the beans on my recent struggles with Ada and why, despite its quirks, it still has a place in today's tech-heavy world.

### Why Ada?

First off, Ada was born in the late '70s and is mostly used in systems where reliability is a must. Think aerospace, automotive systems, and other embedded tech dimensions. This beast is strong on type safety, which means fewer bugs—something all of us could use more of in our lives. Ada’s a bit of a stickler for rules, but in a good way.

### Setting Up Ada

Before we dive into the nitty-gritty, let’s make sure you have Ada up and running. Unlike some languages where you just install a package and go on your merry way, Ada can make you jump through a few hoops.

On Ubuntu, you can install the GNAT compiler (the most commonly used Ada implementation) with:

```shell
sudo apt-get install gnat
```

For those of you on Windows, there's the GNAT Community Edition available [here](https://www.gnu.org/software/gnat/).

### Hello World – The Ada Way

Okay, let's write our first Ada program, which is ubiquitously the “Hello, World!” program. Here’s how you do it:

```ada
with Ada.Text_IO; 
procedure Hello is 
begin 
   Ada.Text_IO.Put_Line ("Hello, World!"); 
end Hello;
```

Save that file as `hello.adb`, then compile it with:

```shell
gnatmake hello.adb
```

Run it like a real champ:

```shell
./hello
```

### The Quirks of Ada

Now, let's talk about some of the quirks Ada brings to the table. Seriously, it’s like that one friend who always follows the rules… no exceptions allowed!

#### Strong Typing

You see, Ada is strongly typed, which means you can’t just shove an integer where a string is expecting one. Here’s a classic example:

```ada
procedure Strong_Typing is
    My_Number : Integer := 5;
    My_String : String(1..20);
begin
    My_String := My_Number; -- This will make Ada cry
end Strong_Typing;
```

Compile that, and you’ll get a nice error stating you can’t mix types. No more slapping values in the wrong place here, buddy! This is both a blessing and a curse since it'll save you headaches but might slow you down a tad.

#### Packages and Procedures

One thing Ada loves is structure. Using packages is more than just a good habit; it's how Ada rolls!

Here’s how you can define a package:

```ada
package Math_Package is
    function Add(A, B : Integer) return Integer;
end Math_Package;

package body Math_Package is
    function Add(A, B : Integer) return Integer is
    begin
        return A + B;
    end Add;
end Math_Package;
```

And then you can utilize that in your main program like so:

```ada
with Math_Package;

procedure Main is 
    Result : Integer;
begin 
    Result := Math_Package.Add(5, 10);
    Ada.Text_IO.Put_Line("The Result is: " & Integer'Image(Result));
end Main;
```

Just remember, no shortcuts allowed. 

### Concurrency Awesomeness

Let me tell you about Ada’s sweet concurrency support. You can make her dance with tasks quite easily. Here’s a simple example where we fire up a couple of tasks:

```ada
task type My_Task is
   entry Start;
end My_Task;

task body My_Task is
begin
   Ada.Text_IO.Put_Line("Task is running!");
end My_Task;

with Ada.Text_IO;

procedure Main is 
   Task1 : My_Task;
begin
   Task1.Start;
end Main;
```

Concurrency in Ada makes multithreading feel like a walk in the park. Unlike some other languages where you’ll tear your hair out trying to manage threads, Ada gives you constructs that make it more manageable.

### Catching Exceptions

Ada comes with solid exception handling. Check this out:

```ada
procedure Exception_Example is
   A, B : Integer;
   Result : Integer;
begin
   A := 10;
   B := 0;

   if B = 0 then
      raise Constraint_Error; -- Custom exception raising
   end if;

   Result := A / B;
   Ada.Text_IO.Put_Line(Integer'Image(Result));

exception
   when Constraint_Error =>
      Ada.Text_IO.Put_Line("Oops! You can't divide by zero.");
end Exception_Example;
```

Ada lets you be explicit about your exceptions. So instead of a nasty crash, you can just handle the situation gracefully.

### Conclusion

In my brief interactions with Ada, I’ve come to appreciate its strong typing, reliable concurrency, and structured approach to programming. Sure, it’s not the flashiest language around, but it gets the job done where it counts—especially in high-stakes environments. 

You might find that working with Ada can feel a bit restrictive at first, but once you embrace its rules and structure, you might discover it’s actually a pretty solid companion for certain tasks.

So, if you're ever in need of rocks-solid reliability, think about giving Ada a shot. It may not be the coolest kid in the programming playground, but it’s definitely not one to be underestimated.

Happy coding!

### References
- [Ada Programming Language – Wikipedia](https://en.wikipedia.org/wiki/Ada_(programming_language))
- [GNU Ada – GNAT](https://www.gnu.org/software/gnat/)
- [Ada Programming: An Introduction](https://www.adaic.com/resources/add_content/overview/)
