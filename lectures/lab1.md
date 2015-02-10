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
```
b. As an function,
```
plot(f);
plot(f,-2..3);
plot(f,-2..3,-3..3);
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

#### LAB1 -PROJECT

a.


b.

c.

#### How to download

1. Login to [www.cuny.edu](http://www.cuny.edu)

2.Click e-mall
![picw300](https://cloud.githubusercontent.com/assets/10469752/6119691/28381266-b09a-11e4-9c60-3b3ecbb1871b.png)
3. Click software.
4. Click Maplesoft.
5. Search Maple
6. Choose Maple 18 and order it.
7. Write your serial code.



