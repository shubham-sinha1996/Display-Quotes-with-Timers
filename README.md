## Displaying Quotes with Typewriter Effect

## Overview

This project implements a quotes display with a typewriting effect. It features a looping mechanism to cycle through a collection of quotes, presenting each one character by character. The display utilizes timers to manage both the typewriting speed and the duration for which each quote is shown.

## Features

- Typewriting Effect: Each quote is displayed one character at a time, simulating a typewriter.
- Looping Quotes: Automatically loops through a predefined array of quotes.
- Customizable Timing: Allows customization of typing speed and display duration for each quote.

## Usage

To use the quotes display with the typewriter effect, the following functions are provided:

1. typeWriter -> The typeWriter function creates a typewriting effect for a given string.

Parameters:

- str (string): The quote to be displayed.
- sel (HTMLElement): The DOM element where the quote will be displayed.
- typeDelay (number, optional): The delay between each character in milliseconds (default is 10).

2. loopThrough -> The loopThrough function cycles through an array of quotes and displays each one using the typeWriter effect.

Parameters:

- arr (array): An array of quotes to be displayed.
- sel (HTMLElement): The DOM element where the quotes will be displayed.
- fn (function): The function to be used for the typewriting effect (e.g., typeWriter).
- hold (number, optional): The time to hold each quote before displaying the next one (default is 5000 ms).
- typeDelay (number, optional): The typing speed for the typewriter effect.
