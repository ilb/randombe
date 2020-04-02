SRCCSV=$(wildcard *.csv)
all: json

json: $(patsubst %.csv,%.json,$(SRCCSV))

%.json: %.csv
	../../bin/csv2json.js $< > $@
