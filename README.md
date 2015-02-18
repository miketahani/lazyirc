# lazyirc
too lazy to find a decent IRC client, so i'm building a node server that acts as a middleman between the remote IRC server and an in-browser frontend.

## contents
#### fake ident server
you'll need to set up port forwarding on your router (i think). this will eventually get collapsed into the node server below.

#### (todo) node server
connects to a remote IRC server with `net`. responds to PING/PONG events; parses, translates, and forwards messages between the frontend and the IRC server. speaks [RFC 1459](https://tools.ietf.org/html/rfc1459) so the frontend doesn't have to.

#### (todo) frontend
an abstraction for the user
