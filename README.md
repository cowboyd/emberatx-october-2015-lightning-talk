# Infinite Jest

by David Tomster Wallace

@cowboyd
http://frontside.io
Ember ATX, October 22nd 2015


## Your app is great!

* I want to talk about your app. You app is great isn't it?
* You feel powerful you've got ember on your side
* you're routing, your transitioning, your animating, yuo're componentening
* and it all just feels so *easy*, so *breezy*

## But then...

* Something truly awful happens
* Something that means you might have to do some work in order to
  appear productive.

## Do You Even Infinite Scroll?

* You realize you've got to present large or even infinite dataset to
  the user.
* And it feels like such a slog every time doesn't it? Just Ugh.


## Ugh.

* Like let me start by trying out and then throwing in the trash 8
crappy jQuery plugins. Ok now that I've got that out of my system. I
can start wading through the sea of Yak hair

* setup my scroll listener to request more data
* crap, am I requesting the pages fast enough to keep up?
* damnit, the requests are coming back in a different order than I
sent them.
* can I start at the end and load backwards?
* what about starting smack dab in the middle?
* how do I even unload records?
* we're not even talking about how to render efficiently.
* Every time I think about implementing infinite scroll in an
  application, all I want to do is just go take a nap

## What if you didn't have to just grin and bear it.

* what if I told you you could get back to that breezy feeling?
* what if I told you that an infinite scroll was as simple as
  providing fetch function to get a single page?

## Like this! Boom Done.

```
return this.store.find('color', {page: 1, perPage: 10});
```

* introducing

## ember-impagination

## An all purpose data layer for working with paged datasets

* You give it a fetch function, and it will figure out when to call
it, how often to call it.
* and even better, when to throw away things that you don't need anymore.
* this takes the pain out of bringing the records to your UI
* I want to stress this is *not* a visual layer, the visuals are left
up to you.
* in fact, the core javascript library isn't even ember specific.


## Demo Time!

** Lightning talks are my favorite because I get to wave my hands
around the explanations and get right to the code.

## Color server

GET /spectrum/colors?page=5

{
  "colors": [
    "hsl(100, 100%, 50%)",
    "hsl(101, 100%, 50%)",
    "..."
  ]
}

## Drop it in

{{#impagination-dataset fetch=fetchColorPage as |colors|}}
  <!-- do stuff with it here. It's just an array -->
{{/impagination-dataset}}


## Works great with ember-collection

{{#impagination-dataset fetch=fetchColorPage as |colors|}}
  {{#ember-collection items=colors as |color| }}
    {{color-block hue=color}}
  {{/ember-collection}}
{{/impagination-dataset}}

## TRUNCATE

* turns out our color server is slow. There's a 1s

## Fin

* worry about fetching your data, not about loading it and unloading it.
*
