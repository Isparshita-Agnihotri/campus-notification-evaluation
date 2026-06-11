# STAGE 1

## Approach

Each notification gets a score.

## Priority is defined by the (given in question / condition):

Placement > Result > Event

## Weights of the notifications :

- Placement = 3
- Result = 2
- Event = 1

## The score combines the:

1. Notification type weight
2. Timestamp

More recent notifications get higher priority.

##  we will get the Top 10 notifications that are sorted by score.

The first 10 notifications are displayed.

## Future Optimization (this will run when the new notifications arrive continuosly then,)

a Min Heap of size 10 can be used.

## Benefits of this approch:

- O(log 10) insertion
- O(10) memory
- Efficient for millions of notifications
