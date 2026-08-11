---
title: "The Down and Dirty Truth About Blue-Green and Canary Deployments in Kubernetes"
date: 2024-12-11T23:30:45+00:00
layout: post
categories:
  - DevOps
  - Kubernetes
tags:
  - Deployments
  - Best Practices
toc:
  sidebar: right
description: "Dive into the nitty-gritty of blue-green and canary deployments in Kubernetes. Learn the differences, when to use each, and some handy code examples to make your life easier!"
---
---

Ah, deployments. The necessary evil we all love to hate. When you're juggling Kubernetes, you often hear the terms blue-green deployments and canary deployments tossed around like a developer's favorite snack—pizza. But what do those terms actually mean? And which one should you use when you’re deploying your latest masterpiece? Sit back, grab your favorite drink, and let’s dive deep into the muddy waters of Kubernetes deployments. 

### Blue-Green Deployments: The Simplistic Swap

Blue-green deployments are like having two identical production environments—let's call them “Blue” and “Green.” You have your current version running in one of those environments (let’s say Blue), while you prepare the new version in the other (Green). 

Once you're good to go with the new version on Green and all looks peachy, you just switch the router (load balancer) to point to the new environment. Basically, it’s like flipping a switch. Quick, clean, and (most importantly) the risk of downtime is practically nonexistent—who doesn’t love that?

Here’s a basic example of how it might look in a Kubernetes setup:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: blue-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: blue
  template:
    metadata:
      labels:
        app: myapp
        version: blue
    spec:
      containers:
        - name: myapp
          image: myapp:blue
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: green-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: green
  template:
    metadata:
      labels:
        app: myapp
        version: green
    spec:
      containers:
        - name: myapp
          image: myapp:green
```

Once you deploy both, switching from Blue to Green is simply a matter of updating the service in Kubernetes to point to the new version. Easy peasy!

### Canary Deployments: The Taste Test

Now, canary deployments are a bit more… nuanced. Think of it as sending out a small batch to a few users before going full throttle. You can deploy the new version (let’s say a percentage of the traffic, usually low maybe 5 or 10%) and see how it behaves. This allows you to monitor the performance and errors with less risk, just like trying out a new pizza topping on a few slices before you decide to order it for the whole party.

Here's what a canary deployment might look like in Kubernetes:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: canary-deployment
spec:
  replicas: 10 # Total replicas
  selector:
    matchLabels:
      app: myapp
      version: canary
  template:
    metadata:
      labels:
        app: myapp
        version: canary
    spec:
      containers:
        - name: myapp
          image: myapp:canary
```

But hold on! You typically would also have a way to route a percentage of the traffic to this canary deployment. You can achieve it using a service or tools like Istio for smart traffic routing.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
```

Now, with tools like Istio, you could set weights for your versions right in your routing rules, so even if your canary deployment hits some bumps, you can easily switch back or roll out more if all’s good.

### So, Which One is Better?

Now, the ultimate question: which one should you choose? Well, it depends on your needs:

**Blue-Green Deployments:**
- Pros: Easy rollback, instant switch over.
- Cons: Requires double the resources, can be costly.

**Canary Deployments:**
- Pros: Minimal risk exposure, real user feedback, can be monitored closely.
- Cons: More complex to manage, requires robust infrastructure for traffic routing.

In short, if you want a quick switch and have the resources, give blue-green a shot. If you're feeling experimental and want to be cautious, roll out a canary deployment.

### Conclusion

In the end, both blue-green and canary deployments serve a purpose, hence the existence of both, right? You'll often find yourself gravitating to one based on the situation. Just remember to keep a close eye when rolling out any of these strategies, so you won’t end up in a messy situation. 

### References
- [Blue-Green Deployments - Martin Fowler](https://martinfowler.com/bliki/BlueGreenDeployment.html)
- [Kubernetes Deployments - Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Canary Deployments Explained - AWS](https://aws.amazon.com/what-is/canary-deployment/)
- [Traffic Management with Istio - Istio Documentation](https://istio.io/latest/docs/concepts/traffic-management/)