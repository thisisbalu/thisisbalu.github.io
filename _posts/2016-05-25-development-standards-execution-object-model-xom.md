---
title: Development Standards for Execution Object Model (XOM)
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-24T19:48:17+00:00
categories:
  - IBM
  - ODM
tags:
  - Annotations
  - BOM
  - XOM
toc:
 sidebar: right
description: The Execution Object Model (XOM) is the model against which the rules run. It references the application objects and data and is the base implementation of the Business Object Model (BOM). Rule projects reference the XOM.
---
The Execution Object Model (XOM) is the model against which the rules run. It references the application objects and data and is the base implementation of the Business Object Model (BOM). Rule projects reference the XOM. Through the Execution Object Model, the rule engine can access application objects and methods, which can be Java objects, XML data, or data from other sources. At run time, rules that were written against the BOM are run against the XOM.  

{% include figure.html path="assets/img/blog/Execution-Object-Model-XOM.png" class="img-fluid rounded z-depth-1" zoomable=false %}

Every BOM element (business element) must have a corresponding Execution Object Model element (execution element). The correspondence between execution elements and business elements does not need to be one-to-one. If a business element originates from an execution element, you do not need to specify an explicit mapping. If a business element does not originate from an execution element, you must specify a BOM to XOM mapping.

When the data model is in Java, the BOM can directly be generated from Java Execution Object Model (XOM). XOM annotations are used to configure BOM generation and are also considered a standard way of documenting the BOM verbalizations in XOM. If you want to extend the BOM with business classes and methods, you can then map these business elements to XOM elements using BOM to XOM mapping in the BOM Editor.

## Annotations to the XOM

  * Annotations are added to the XOM to customize the way that the BOM is created from Java classes.
  * You can use annotations in your Java source code. Annotations are a type of metadata that you can add to classes, members, and parameters.
  * You use the annotations to apply changes to classes, members, or parameters in the BOM.

For example, you can add an annotation to a class to define a business name for the class. In the BOM, the class takes the name defined by the annotation. When you create the BOM from the XOM, the BOM Verbalization page of the New BOM Entry wizard displays the business name of the class.

There are eight different types of annotations those are provided by ilog.rules.bom.annotations package. They are as follows

<li >
  BoundedIntDomain
</li>
<li >
  BusinessName
</li>
<li >
  BusinessType
</li>
<li >
  CollectionDomain
</li>
<li >
  CustomProperties
</li>
<li >
  CustomProperty
</li>
<li >
  NotBusiness
</li>
<li >
  PatternDomain
</li>

> To use the annotations from the ilog.rules.bom.annotations package, you must add /studio/lib/jrules-engine.jar to the classpath of your XOM. However, if you just want to use the @java.beans.ConstructorProperties annotation, you do not need to add the jrules-engine.jar to the classpath.

## @NotBusiness

The classes and members with the @NotBusiness annotation are not imported in the BOM. For example, if you encounter problems when loading a class, you can filter out the member that uses this class by setting the @NotBusiness annotation to this member.

**Syntax** : @NotBusines

<pre class="lang:default highlight:0 decode:true" title="In the XOM, the annotation can be used as follows">public class Customer {
 public Customer(String name) {...}
 public String getName() {...}
@NotBusiness
public Object readResolve() throws ObjectStreamException {...}
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 Customer(string arg);
 readonly string name;
}</pre>

## @BusinessName

In Java, the parameter names are not stored in the class. You can set the @BusinessName annotation to give a business name to the parameter. The parameter names are stored in the BOM and used in the BOM to XOM mapping, and in the DVS constructor for testing. Syntax @BusinessName(

In Java, the parameter names are not stored in the class. You can set the @BusinessName annotation to give a business name to the parameter. The parameter names are stored in the BOM and used in the BOM to XOM mapping, and in the DVS constructor for testing.

**Syntax** : @BusinessName(<a string>)

<pre class="lang:default highlight:0 decode:true" title="In the XOM, the annotation can be used as follows">public class Customer {
 public Customer(@BusinessName("name") String name) {...}
 public String getName() {...}
}</pre>

<pre class="lang:default highlight:0 decode:true" title="The result in the BOM is the following code">class Customer {
 Customer(string name);
 readonly string name;
}</pre>

## @BusinessType

The @BusinessType annotation changes the type of a member or a parameter in the BOM. For example, if you want to change a type int to an enumeration in the BOM to verbalize it. An enumeration is a class with a domain set as an enumeration of static references. When you apply the @BusinessType annotation to a method, the return type of the method is modified.

**Syntax** : @BusinessType(<a string>)

<pre class="lang:default highlight:0 decode:true" title="In the XOM, the annotation can be used as follows">public class Customer {
 public Customer(@BusinessType("Category") int category) {...}
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 Customer(Category category);
}</pre>

## @BoundedIntDomain

The @BoundedIntDomain provides a bounded domain to specify an interval between two bounding values on a member or a parameter of type int.

**Syntax** : @BoundedIntDomain(min = <an int>, max = <an int>)

<pre class="lang:default highlight:0 decode:true " title="In the XOM, the annotation can be used as follows">public class Customer {
 @BoundedIntDomain(min = 0, max = 120)
 public int age;
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 int age domain [0,120];
}</pre>

## @CollectionDomain

The @CollectionDomain provides a collection domain to specify the type of collection elements and the cardinality. The collection domain and the element type are used by the Business Action Language (BAL).

**Syntax** : @CollectionDomain(<>)

<pre class="lang:default highlight:0 decode:true " title=" In the XOM, the annotation can be used as follows">public class Cart {
@CollectionDomain(elementType = "Item")
public List items;
@CollectionDomain(min = 1, max = 12)
public Person[] passengers;
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Cart{
List items domain 0,* class Item;
Person[] passengers domain 1,12 class Person;
}</pre>

## @PatternDomain

The @PatternDomain annotation enables you to specify a pattern domain for a member or a parameter.

**Syntax** : @PatternDomain(<a string>)

<pre class="lang:default highlight:0 decode:true" title=" In the XOM, the annotation can be used as follows">public class Customer {
 @PatternDomain("[A-Za-z]");
 public String getName() {...}
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 readonly string name domain "[A-Za-z]";
}</pre>

## @CustomProperty

The @CustomProperty annotation sets a property on a class, a member, or a parameter.

**Syntax** : @CustomProperty(name=<a string>, value=<a string>)

<pre class="lang:default highlight:0 decode:true " title=" In the XOM, the annotation can be used as follows">public class Customer {
 @CustomProperty(name = "dataio.default", value = "true")
 public Customer(@BusinessName("name") String name);
 public String getName() {...}
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 Customer(string name)
 property dataio.default "true";
 readonly string name;
}</pre>

## @CustomProperties

The @CustomProperties annotation sets several properties on a class, a member, or a parameter.

**Syntax** @CustomProperties(names={<strings>},values={<strings>})

<pre class="lang:default highlight:0 decode:true " title="In the XOM, the annotation can be used as follows">public class Customer {
 @CustomProperties(names = {"cobol_length", "other" }, values = { "9",
"true"})
 public String getName() {...}
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 Customer(string name)
 property cobol_length "9"
 property other "true";
 readonly string name;
}</pre>

## @java.beans.ConstructorProperties

You can use the @java.beans.ConstructorProperties annotation to provide a name for a constructor. You can also use the@BusinessName on the parameters to give a name to each argument in the BOM.

**Syntax** : @java.beans.ConstructorProperties({<strings>})

<pre class="lang:default highlight:0 decode:true " title="In the XOM, the annotation can be used as follows">public class Customer {
 @ConstructorProperties("name", "age")
 public Customer(String name, int age);
}</pre>

<pre class="lang:default highlight:0 decode:true " title="The result in the BOM is the following code">class Customer {
 Customer(string name, int age);
}</pre>

Happy Learning! Happy Exploring!!

&nbsp;

_**<span style="text-decoration: underline;">Sources</span>**:_

  * _<http://www.ibm.com/support/knowledgecenter>_
  * _<http://www.ibm.com/support/knowledgecenter/SSQP76_8.0.0/com.ibm.wodm.dserver.rules.ref.res/html/api/html/ilog/rules/bom/annotations/package-summary.html>_
  * _<https://www.ibm.com/support/knowledgecenter/SSQP76_8.6.0/com.ibm.odm.dserver.rules.ref.res/html/api/html/ilog/rules/bom/annotations/package-summary.html>_

 [1]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/Execution-Object-Model-XOM.png