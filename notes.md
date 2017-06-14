# Functional Programming Notes

Watch [this YouTube video](https://www.youtube.com/watch?v=e-5obm1G_FY) for the full talk on functional programming.

## High-Order Functions

High-order functions are functions that can take other functions as inputs.
Or a function that can return a function as it's output.

Functions are treated as objects.

## Avoid Mutability

Use immutable data - data that can not be changed.

## Persistent Data Structures

Used for efficient immutability (Mori, Immutable.js). When using large objects, don't want to copy over to a new object - very inefficient.

## Structural Sharing

Using parts of the old version with the new version. Instead of copying over the entire object, represent the array as a tree. Such that each leaf node of the tree is what we are storing. If we want to change something, no need to change the entire array (tree). Create a node, and make a new tree without repeating anything. Just create a new tree that contains the previous nodes and the new node.

## Intro Article
https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming