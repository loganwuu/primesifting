# Prime Sifting

##### A web page that returns all of the prime numbers less than a number given by users. (9/9/15)

#### By Logan Wu

## Description

A web page that returns all of the prime numbers less than a number given by users.

## Specs

Use of the Sieve of Eratosthenes for the algorithm:
* Create a list of numbers from 2 through n: 2, 3, 4, ..., ```number```.
* Initially, let ```prime``` equal 2, the first prime number.
* Starting from ```prime```, remove all multiples of ```prime``` from the list.
* Increment ```prime``` by 1.
* When reach the ```number```, all the remaining numbers in the list are primes.

## Setup

* Clone the project using the link provided on Github in the Terminal.

## Technologies Used

HTML, CSS, JavaScript, jQuery, Mocha and Chai for testing

### Legal

Copyright (c) 2015 **Logan Wu**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
