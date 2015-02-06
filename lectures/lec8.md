## LEC 8

### The Intermediate Value Theorem (IVT) 
Suppose that $f$ is continus on the closed interval $[a,b]$ and let $N$ be any number between $f(a)$ and $f(b)$. where $f(a)\neq f(b)$ .
Then there exists a number $c$ in $(a,b)$ such that $f(c)=N$.

#### Remark

1. $c$ does not need to be unique.
2. Between $a$ and $b$ means $(a,b)$ if $a<b$.
2. close interval $[a,b] in realline is very important. It has very good properties like compact and connected(path-connected) and continuous function $f$ preserves it.
So $f([a,b])$ is compact and connected in realine and it is also close interval. If we assume $f(a)<f(b)$, $N\in (f(a),f(b))\subset f([a,b])$.
3. IVT is very useful to prove the existence of a root of certain equations.

#### Example 1. Show that there is a root of the equation
$$
4x^3-6x^2+3x-2=0
$$
between $1$ and $2$.

How to.
1. Let $f(x)=4x^3-6x^2+3x-2$ then $f$ is continuous on $\doubleR$
2. A root $c$ of $f(x)=0$ means $f(c)=0$. Therefore $N=0$.
3. Since $c\in (1,2)$, we need to choose $a=1,$b=2$.
4. We only need to check whether $N=0$  is between $f(a)$ and $f(b)$.

Eventually, we need to prove

a. $f(a)>0$ and $f(b)<0$

or

b. $f(a)<0$ and $f(b)>0$

Check $f(a)$ and $f(b)$.

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/643885/width/678/height/613/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="678px" height="613px" style="border:0px;"> </iframe>

#### Example 2. Use IVT to show that there is a root of the given equation in the specified interval.
1. $x^4+x-3=0$, $(1,2)$
2. $\cos{x}=x$, $(0,1)$


