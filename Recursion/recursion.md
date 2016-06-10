#Recursion

Recursion occurs when a function calls itself. Dynamic programming is breaking large problems into smaller, more solvable ones.

Writing great code to solve a well-understood problem is only part of a software engineer’s job. You should also consider how your code responds when given unexpected inputs. Thinking of possible “corner cases” ahead of time allows you to create much more resilient code that stands the test of time.

Why is dynamic programming useful? This is used when a function can make progress toward solving a problem, but is not able to solve the entire problem immediately. In this case, if we always make at least a little forward progress, then ultimately if we keep going, we will complete the computing task.

Let’s consider an example: “I’m thinking of an integer between 1 and 120. Guess it.” If you were to guess ‘60’, and I said “nope, that’s too high,” how would you respond? You could treat the situation as if we were just starting, and I had said “I’m thinking of an integer between 1 and 59.” In doing this, you reframed the problem as a less complex one, a technique called dynamic programming.

Let us continue: if next you guessed ‘30’, and I said “nope, too low,” then you could again reframe the problem as “I’m thinking of a number from 31 to 59.” Let’s say you then guessed ‘42’, to which I said “yes, you guessed it, how did you know!” With this ‘divide- and-conquer’ approach, you could guess the correct number out of 120, in just 6 guesses on average.

####There are three requirements for effective recursion, as follows:
- Base cases:
When a function can determine (and return) an answer immediately, this is a ‘base case’. If you successfully guessed my number, we know right away the game is over. Conversely, if you look for ‘spizzwink’ in a dictionary and find no word between ‘spitz’ and ‘splash’, you know ‘spizzwink’ is not in that dictionary. There are positive base cases and negative base cases.

- Forward progress:
If a function cannot solve a problem but can narrow the range of possibilities, this is ‘forward progress’. Learning that guess ‘60’ is too high, you have made forward progress because you now know the solution is not in the ‘60-120’ range. Generally, for recursion to be effective, you must make at least a little forward progress in all cases. If there is a case in which you can neither solve the problem nor break it down further, you cannot solve the problem in all cases.

- Calling back into itself as if it were the original problem:
What if earlier my initial challenge had been “I’m thinking of an integer between 1 and 59 – guess it!” You would have proceeded exactly as you did in the original ‘1-120’ problem, after learning that ‘60’ was too high. If each guess were a function call, then after learning that ‘1-120’ could be limited to ‘1-59’, you could call the function again with ‘1-59’ as if it were the original challenge. Furthermore, this function wouldn’t know whether this request was the initial challenge, or a subsequent call to itself after narrowing things down! A recursive function behaves correctly either way, so it doesn’t know or care about this distinction. 
