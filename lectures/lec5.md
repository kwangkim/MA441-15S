## LEC 5

### Limit Laws
![limit](http://www.nabla.hr/LimFLawsA.gif)


#### Example 1
![e1](http://image.slidesharecdn.com/lecture5-limitlaws-140916111716-phpapp01/95/lecture-5-limit-laws-3-638.jpg?cb=1410884284)

#### Example 2 Evaluation.

\\[ \lim_ {x\to 5} (2x^2-3x+4) \\]

\\[ \lim_ {x\to -2} \frac{x^3+2x^2-1}{5-3x} \\]


### Direct substitution Property

If \\(f\\) is a polynomial or a rational function or radical function and a is **in the domain** of \\(f\\),

\\[ \lim_ {x\to a} f(x)=f(a) \\]
(f(x) is continuous on the **domain**.)

### Example 3.

\\[ \lim_ {x\to 1} \frac{x^2-1}{x-1} \\]

### Fact

If \\( f(x)=g(x) \\) when \\( x\neq a\\), then

\\[ \lim_ {x \to a} f(x)\\]

is equal to

\\[ \lim_ {x\to a} g(x) \\]
if the limits exist.

#### Remark **Limit does not depends on the finite many values.**

#### Example 4.

\\[ \lim_ {h\to 0} \frac{(3+h)^2-9}{h} \\]

#### Example 5.

\\[ \lim_ {t\to 0} \frac{\sqrt{t^2+9}-3}{t^2} \\]

### Theorem

$$ \lim_{x\to a} f(x)=L \Leftrightarrow  \lim_{x\to a^-} f(x)=L=\lim_{x\to a^+} f(x) $$


#### Example 6.

$$ \lim_{x\to 0} |x| $$

#### Example 7.

$$ \lim_{x\to 0} \frac{|x|}{x} $$


#### Example 8.

$$ \lim_{x\to 0} \frac{x^2}{|x|} $$

#### Example 9.

$$ \lim_{x\to 0} \sqrt{x}=$$

#### Example 10.
If
$$
f(x)=\left\{
\begin{array}{ll}
\sqrt{x-4} & x>4\\
8-2x & x<4
\end{array}
$$
1. Find
$$ \lim_{x\to 4} f(x)$$
2. Graph $y=f(x)$.

### Theorem( inequality of limit)
If $f(x)\leq g(x)$  when $x$ is near $a$ ($x\neq a$) and $\lim_{x\to a} f(x)$ and $\lim_{x\to a} g(x)$ exists,then

$$ \lim_{x\to a} f(x)\leq \lim_{x\to a} g(x)$$

#### Remark. Strict inequality does not hold for the limits.
For $x>0$,
$$ \frac{1}{x}>0$$
But
$$  \lim_{x\to \infty} \frac{1}{x}=0$$ 

### (The squeeze Theorem) If $f(x)\leq g(x)\leq h(x)$  when $x$ is near $a($x\neq a$) and 
$$\lim_{x\to a} f(x)=\lim_{x\to a} h(x)=L$$
Then
$$
\lim_{x\to a} g(x)=L
$$

#### Example 11 Using the squeeze lemma, find
$$
\lim_{x\to a} x^2\cdot\sin(\frac{1}{x})
$$

#### We cannot say

$$
\lim_{x\to a} x^2\cdot\sin(\frac{1}{x})=(\lim_{x\to a} x^2)\cdot\lim_{x\to a}(\sin(\frac{1}{x}))
$$

