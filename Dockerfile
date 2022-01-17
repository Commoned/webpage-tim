FROM registry.access.redhat.com/ubi8/httpd-24

COPY ./ /usr/local/apache2/htdocs
#test2
CMD ["/usr/bin/run-httpd"]
