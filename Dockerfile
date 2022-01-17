FROM rhscl/s2i-core-rhel7:1s

COPY ./ /usr/local/apache2/htdocs
#test2
CMD ["/usr/bin/run-httpd"]
