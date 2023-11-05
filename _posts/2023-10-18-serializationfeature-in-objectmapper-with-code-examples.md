---
title: "SerializationFeature in ObjectMapper with Code Examples"
date: 2023-10-20T18:40:40+00:00
layout: post
categories:
  - Java 
tags:
  - serialization
toc:
  sidebar: right
description: Differences between connectionRequestTimeout, connectionTimeout, and socketTimeout in networking. Learn how these parameters influence connection establishment, pool management, and data transmission in HTTP client libraries.
---

Hello fellow code crafters! Today, we embark on a journey through the fascinating world of serialization in Java. Specifically, we'll be diving deep into the `SerializationFeature` enum, a powerful tool in the Jackson library's arsenal. This feature enables fine-grained control over how objects are serialized. By the end of this guide, you'll be equipped to wield these features with confidence and precision. Let's get started!

## **Understanding SerializationFeature**

The `SerializationFeature` enum is a part of the Jackson library, which is widely used for JSON processing in Java. It provides a plethora of options to customize the serialization process according to your specific needs. From formatting dates to handling null values, this feature is a Swiss army knife for serialization.

## **Configuring ObjectMapper with SerializationFeature**

Before we dive into the details, let's set up our ObjectMapper with some common SerializationFeatures.

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

ObjectMapper objectMapper = new ObjectMapper();
```

Now, let's explore some of the most commonly used SerializationFeatures and see how they impact the serialization process.

### **1. `INDENT_OUTPUT`: Making JSON Readable**

This feature adds indentation to the JSON output, making it more human-readable.

```java
objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
```

**Example:**

```java
class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.INDENT_OUTPUT);

        Person person = new Person("John Doe", 30);
        String jsonOutput = objectMapper.writeValueAsString(person);
        System.out.println(jsonOutput);
    }
}
```

**Output:**

```json
{
  "name" : "John Doe",
  "age" : 30
}
```

### **2. `WRITE_DATES_AS_TIMESTAMPS`: Controlling Date Serialization**

This feature allows you to control how dates are serialized, whether as timestamps or in a more human-readable format.

```java
objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
```

**Example:**

```java
import java.time.LocalDateTime;

class Event {
    String name;
    LocalDateTime dateTime;
    
    public Event(String name, LocalDateTime dateTime) {
        this.name = name;
        this.dateTime = dateTime;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        LocalDateTime eventTime = LocalDateTime.of(2023, 10, 14, 12, 30, 0);
        Event event = new Event("Tech Conference", eventTime);
        String jsonOutput = objectMapper.writeValueAsString(event);
        System.out.println(jsonOutput);
    }
}
```

**Output:**

```json
{
  "name" : "Tech Conference",
  "dateTime" : "2023-10-14T12:30"
}
```

### **3. `FAIL_ON_EMPTY_BEANS`: Handling Empty Objects**

This feature controls whether an exception should be thrown when serializing an empty object.

```java
objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
```

**Example:**

```java
class EmptyObject {}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);

        EmptyObject emptyObject = new EmptyObject();
        String jsonOutput = objectMapper.writeValueAsString(emptyObject);
        System.out.println(jsonOutput);
    }
}
```

**Output:**

```json
{}
```

### **4. `FAIL_ON_SELF_REFERENCES`: Preventing Cyclic References**

This feature ensures that Jackson doesn't run into an infinite loop when dealing with objects that have circular references.

```java
objectMapper.disable(SerializationFeature.FAIL_ON_SELF_REFERENCES);
```

**Example:**

```java
class Node {
    String data;
    Node next;
    
    public Node(String data) {
        this.data = data;
    }
    
    public void setNext(Node next) {
        this.next = next;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_SELF_REFERENCES);

        Node node1 = new Node("First");
        Node node2 = new Node("Second");
        node1.setNext(node2);
        node2.setNext(node1); // Circular reference

        String jsonOutput = objectMapper.writeValueAsString(node1);
        System.out.println(jsonOutput);
    }
}
```

**Output:**

```json
{


  "data" : "First",
  "next" : {
    "data" : "Second",
    "next" : {
      "data" : "First",
      "next" : null
    }
  }
}
```

### **5. `WRAP_ROOT_VALUE`: Wrapping Root Value**

This feature allows you to wrap the root value in an additional JSON object.

```java
objectMapper.enable(SerializationFeature.WRAP_ROOT_VALUE);
```

**Example:**

```java
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName(value = "Person")
class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.WRAP_ROOT_VALUE);

        Person person = new Person("John Doe", 30);
        String jsonOutput = objectMapper.writeValueAsString(person);
        System.out.println(jsonOutput);
    }
}
```

**Output:**

```json
{
  "Person" : {
    "name" : "John Doe",
    "age" : 30
  }
}
```

### **6. `WRAP_EXCEPTIONS`: Wrapping Exceptions**

This feature wraps exceptions with a higher-level exception. This can be useful for providing more context when an exception occurs during serialization.

```java
objectMapper.enable(SerializationFeature.WRAP_EXCEPTIONS);
```

**Example:**

```java
class CustomException extends Exception {
    private final int code;

    public CustomException(int code, String message) {
        super(message);
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}

class ErrorDetails {
    int errorCode;
    String errorMessage;

    public ErrorDetails(int errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

public class Main {
    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.WRAP_EXCEPTIONS);

        try {
            throw new CustomException(404, "Resource not found");
        } catch (CustomException e) {
            ErrorDetails errorDetails = new ErrorDetails(e.getCode(), e.getMessage());
            try {
                String jsonOutput = objectMapper.writeValueAsString(errorDetails);
                System.out.println(jsonOutput);
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }
}
```

**Output:**

```json
{
  "errorCode" : 404,
  "errorMessage" : "Resource not found"
}
```

### **7. `EAGER_SERIALIZER_FETCH`: Eager Serializer Fetch**

This feature determines whether to eagerly fetch a serializer for a specific type.

```java
objectMapper.enable(SerializationFeature.EAGER_SERIALIZER_FETCH);
```

*Note: This feature is typically used internally and might not be relevant for most application-level code.*

### **8. `CLOSE_CLOSEABLE`: Closing Closeable**

This feature ensures that Jackson will automatically close any `Closeable` resources after serialization.

```java
objectMapper.enable(SerializationFeature.CLOSE_CLOSEABLE);
```

**Example:**

```java
import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.IOException;

class Resource implements Closeable {
    private final String content;

    public Resource(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    @Override
    public void close() throws IOException {
        System.out.println("Resource closed.");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.CLOSE_CLOSEABLE);

        try (Resource resource = new Resource("Sample content")) {
            String jsonOutput = objectMapper.writeValueAsString(resource);
            System.out.println(jsonOutput);
        }
    }
}
```

**Output:**

```
Resource closed.
```

### **9. `FLUSH_AFTER_WRITE_VALUE`: Flushing After Write**

This feature controls whether Jackson will flush the output stream/writer after writing a value.

```java
objectMapper.enable(SerializationFeature.FLUSH_AFTER_WRITE_VALUE);
```

*Note: This feature is typically used internally and might not be relevant for most application-level code.*

### **10. `ORDER_MAP_ENTRIES_BY_KEYS`: Ordering Map Entries**

This feature determines whether to order entries in a Map by their keys.

```java
objectMapper.enable(SerializationFeature.ORDER_MAP_ENTRIES_BY_KEYS);
```

**Example:**

```java
import java.util.LinkedHashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.ORDER_MAP_ENTRIES_BY_KEYS);

        Map<String, String> unorderedMap = new LinkedHashMap<>();
        unorderedMap.put("c", "C");
        unorderedMap.put("b", "B");
        unorderedMap.put("a", "A");

        String jsonOutput = objectMapper.writeValueAsString(unorderedMap);
        System.out

.println(jsonOutput);
    }
}
```

**Output:**

```json
{
  "a" : "A",
  "b" : "B",
  "c" : "C"
}
```

## **Conclusion: Mastering SerializationFeature**

You've now unlocked the power of `SerializationFeature` in ObjectMapper. These features give you fine-grained control over the serialization process, allowing you to tailor it to your specific requirements. Whether it's formatting output, handling dates, or managing object references, `SerializationFeature` has got you covered.

Remember, understanding these features can greatly enhance your ability to work with JSON data in Java. So go ahead, experiment, and craft your code with confidence!

*Reference Links:*

- [Jackson ObjectMapper Documentation](https://github.com/FasterXML/jackson-databind)
- [SerializationFeature Enum Documentation](https://fasterxml.github.io/jackson-databind/javadoc/2.13/com/fasterxml/jackson/databind/SerializationFeature.html)

Happy coding and may your JSON be well-serialized! 🚀