FROM httpd:latest

COPY ./ /usr/local/apache2/htdocs
#test2
CMD ["/usr/bin/run-httpd"]
