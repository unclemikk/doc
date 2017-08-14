# TODO

- Need a way to generate svg charts that are used in the docs
- Need a way to put charts in the ref docs as well
- Ref doc markdown is a python one that does not work with d3
- Possible to generate a shared library of svg charts, animations and such in the docs and then refer to those in refdocs

Would it make sense to make is so that any diagram that is inlined in a document is written to an external svg file that can be referenced from other locations? The user may specify an id for the graph and a plugin could expand the id to an image tag with a full url.

Maybe this can be solved with transclusion?

https://www.npmjs.com/package/hercule
