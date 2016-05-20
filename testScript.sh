#!/bin/bash

#update and start Selenium Server.
webdriver-manager update
echo "Selenium server starting on localhost:4444"
echo "Opening new tab for Selenium Server to run"
osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'
webdriver-manager start
