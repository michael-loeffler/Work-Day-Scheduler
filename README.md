# Work Day Scheduler

## Description

This application is a Work Day Scheduler, allowing a user to create events for each hour of the workday in order to stay organized. The application stores the events in localStorage so they remain even when the page is refreshed.

I was motivated to create this application because the workplace can be a hectic environment full of distractions and frequent interruptions. That said, workers are still under time constraints to get things done. A way to stay organized and on-task is critical for meeting deadlines, so a building a solution like a Work Day Scheduler was easy to get excited about.

Through working on this project, I have learned a lot about utilizing the great tools embedded in Third Party APIs to make dynamic, responsive webpages based on user interaction, while being efficient with the amount of code that is written. Some of the biggest points of learning include:

* Leveraging the jQuery API and its JavaScript shorthand to make my code contain less characters
    * jQuery DOM selectors and traversal
    * jQuery methods that serve as element editors, updating their attributes like class, id, text, etc.
    * jQuery methods that can clone elements or retrieve the user data entered into an input element
* Leveraging the Day.js API to access real-time date and time data, making applications richer with data pertinent to users
    * Displaying the current day and date
    * Comparing element data to the real-life time in order to change the way elements are displayed according to the time of day
* Beginning to better understand the benefits of the Bootstrap in building well-styled web applications
* Solidifying my understanding of localStorage to retain user data to be called again at a later time
    * Strategically using variables in the script file to set and get data from localStorage

## Installation

N/A

## Usage

The Work Day Scheduler functions by first rendering time blocks for each hour of the day. It displays the current day and date at the top of the page. Additionally, it displays conditional formatting for the time blocks, signifying with color whether a time block is in the past, present, or future. Finally, a user can click into a time block and type in an event that they would like to accomplish/attend during that time block. When the user clicks the save button, their event data is stored in localStorage so that it can be called again when the page is refreshed and remain in place.

## Link to deployed application:

    https://michael-loeffler.github.io/Work-Day-Scheduler/

## Preview of application and demonstration of features

![Preview of application and demonstration of features](./assets/images/Work%20Day%20Scheduler%20Demo.gif)

## Credits

* Mozilla Developer Network
* W3 Schools
* jQuery API Documentation
* Day.js APT Documentation
* Bootstrap Documentation

## License

MIT License

Copyright (c) [2023] [Michael Loeffler]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---