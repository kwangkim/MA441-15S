### LAB 1

#### Maple



#### function vs expression
For $$ f(x)=x^2-2x+3$$,

a. As an expression,
```Maple
f:=x^2-2x-3;
```
b. As an function,
```
f:=x->x^2-2x-3;
```

#### How to evaluate
a. As an expression,
```Maple
subs(x=a,f);
eval(f,x=a);
```
b. As an function,
```
f(a);
```
#### How to factor
a. As an expression,
```Maple
factor(f);
```
b. As an function,
```
factor(f(x));
```
#### How to plot
a. As an expression,
```Maple
plot(f,x);
plot(f,x=-2..3);
plot(f,x=-2..3,y=-3..3);
plot([f,g],x=-0.1..0.1);
```
b. As an function,
```
plot(f);
plot(f,-2..3);
plot(f,-2..3,-3..3);
plot([f,g],-0.1..0.1)
```
#### warning
To multiply two functions or expressions, use *.
```
(x+1)*(x-2)
```
#### Piecewise function.
$$$
f(x)=\left\{
\begin{array}{ll}
\frac{x^2-1}{x-1} & x>1\\
x^2+1 &x<1
\end{array}
\right.
$$$
a. As an expression,
```Maple
f:=piecewise(x<=1,x^2+1,x>1,(x^2-1)/(x-1));
```
b. As an function,
```
f:=x->piecewise(x<=1,x^2+1,x>1,(x^2-1)/(x-1));
```
#### limit
a. As an expression,
```Maple
limit(f,x=1);
limit(f,x=1,right);
limit(f,x=infnity);
```
b. As an function,
```

limit(f(x),x=1);
limit(f(x),x=1,left);
limit(f(x),x=infnity);
```
#### To get a decimal value
```
evalf(sqrt(5))
```
##### SAMPLE 1.
a. Plot the graph of $$f(x)=-x^2,~g(x)=x^2*\sin(\frac{1}{x}),~h(x)=x^2$$ near $$x=0$$. Using Squeeze theorem, find
$$$
\lim_{x\to 0} g(x)
$$$
b. Using limit command, verify above answer.

c. Conclude the $$g(x)$$ is continuous on $$(-\infty,\infty)$$.

To write your opinion, we may use text mode.

##### SAMPLE 2.
a. Prove that the equation $$x^5-x^2-4=0$$ has at least one real root.
Hint: Use evaluation with IVT. To type $$\sqrt$$ use **sqrt** command.

b. By plotting, find the root to three decimal places.
Hint: Reduce the domain of x to get a better approximation.

#### LAB1 -Project1 (**Due: Feb 15, 10AM**)

##### How to sumbit

Post a note with title [LAB1] Your full name 
to **instructor** using piazza.com.
Do not forget to attach your maple file.

### If you post it to team or entire class, you will get zero score.

##### Problem 1.
a. Plot the graph of $$f(x)=-x^2,~g(x)=x^2*\sin(\frac{1}{x}),~h(x)=x^2$$ near $$x=0$$. Using Squeeze theorem, find
$$$
\lim_{x\to 0} g(x)
$$$
b. Using limit command, verify above answer.

c. Conclude the $$g(x)$$ is continuous on $$(-\infty,\infty)$$.

To write your opinion, we may use text mode.

##### Problem 2.
a. Prove that the equation $$\sqrt{x-5}=\frac{1}{x+3}$$ has at least one real root.
Hint: Use evaluation with IVT. To type $$\sqrt$$ use **sqrt** command.

b. By plotting, find the root to three decimal places.
Hint: Reduce the domain of x to get a better approximation.

#### How to download

1. Login to [www.cuny.edu](http://www.cuny.edu)

2.Click e-mall
![picw300](https://cloud.githubusercontent.com/assets/10469752/6119691/28381266-b09a-11e4-9c60-3b3ecbb1871b.png)
3. Click software.
4. Click Maplesoft.
5. Search Maple
6. Choose Maple 18 and order it.
7. Write your serial code.



