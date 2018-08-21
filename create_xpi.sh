#!/bin/bash

PREFIX=palemoon_barebones_tab_groups@fl4shk.net

rm -f $PREFIX.xpi
zip -r $PREFIX.zip chrome defaults locale skin chrome.manifest install.rdf
mv $PREFIX.zip $PREFIX.xpi
