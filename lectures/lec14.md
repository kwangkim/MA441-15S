### Lec14 Derivative of Trigonometric Function.
#### Assume $$$x$$$ is always radian fo Trigonometric functions.

#### Derivative of $$f(x)=\sin{(x)}$$
From $$\sin(x+h)=\sin(x)\cos(h)+\cos(x)\sin(h)$$,
$$$
\begin{eqnarray}
f'(x)&=&\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to 0}\frac{\sin(x)\cos(h)+\cos(x)\sin(h)-\sin(x)}{h}\\
&=&\lim_{h\to 0}\left[\frac{\sin(x)\cos(h)-\sin(x)}{h}+\frac{\cos(x)\sin(h)}{h} \right]\\
&=&\lim_{h\to 0}\left[\sin(x)\cdot \frac{\cos(h)-1}{h}+\cos(x)\cdot\frac{\sin(h)}{h} \right]
\end{eqnarray}
$$$
Since $$\lim_{h\to 0} \sin(x)=\sin(x)$$ and $$\lim_{h\to 0} \cos(x)=\cos(x)$$  
we need to find $$\lim_{h\to 0}\frac{\cos(h)-1}{h}$$ and $$\lim_{h\to 0}\frac{\sin(h)}{h}$$

#### $$\lim_{\theta\to 0}\frac{\sin(\theta)}{\theta}$$

![picw300](https://cloud.githubusercontent.com/assets/10469752/6321165/aafec812-bac1-11e4-9215-e89d66c67712.png)

Assume $$\theta>0$$
$$$Area(\triangle BOA) <Area( Sector(BOA))< Area(\triangle DOA)$$$$$
implies 
$$$\sin(\theta)<\theta<\tan(\theta)$$$$$
So
$$$  \cos(\theta)<\frac{\sin(\theta)}{\theta}<1$$$
Since $$\lim_{\theta\to 0} \cos(\theta)=1$$, by squeeze theorem,
$$$
\lim_{\theta\to 0^+}\frac{\sin(\theta)}{\theta}=1
$$$
By using $$\theta'=-\theta$$ and $$\sin{-\theta}=-\sin{\theta}$$
$$$
1=\lim_{\theta\to 0^+}\frac{\sin(\theta)}{\theta}=\lim_{\theta'\to 0^-}\frac{\sin(-\theta')}{-\theta}=\lim_{\theta'\to 0^-}\frac{-\sin(\theta')}{-\theta}
=\lim_{\theta'\to 0^-}\frac{\sin(\theta')}{\theta'}
$$$
Therefore
$$$
\lim_{\theta\to 0}\frac{\sin(\theta)}{\theta}=1
$$$
Here we assume the $$Area(Unit Circle)=\pi$$. 
#### $$\lim_{h\to 0}\frac{\cos(h)-1}{h}$$
Since for $$-\pi/2 <h<\pi/2$$ ,$$\frac{cos(h)+1}{cos(h)+1}=1$$$ and $$$\cos^2(h)-1=-\sin^2(h)$$,
$$$
\lim_{h\to 0}\frac{\cos(h)-1}{h}=lim_{h\to 0}\frac{(\cos(h)-1)(\cos(h)+1)}{h(\cos(h)+1)}=lim_{h\to 0}\frac{-\sin(h)\cdot\sin(h)}{h(\cos(h)+1)}=lim_{h\to 0}\frac{\sin(h)}{h}\cdot lim_{h\to 0}\frac{-\sin(h)}{(\cos(h)+1)}=1\cdot (\frac{-0}{2})=0
$$$
#### $$f'(x)=(\sin(x))\cdot0+(\cos(x))\cdot 1= cos(x)$$
Similarly,
$$$
\frac{d}{dx}(\cos(x))=-\sin(x),~\frac{d}{dx}(\tan(x))=-\sec^2(x)
$$$
$$$
\frac{d}{dx}(\csc(x))=-\csc(x)\cot(x),~\frac{d}{dx}(\sec(x))=-\sec(x)\tan(x),~\frac{d}{dx}(\cot(x))=-csc^2(x)
$$$
####  Find $$y'$$.
1. $$y=x^2\cdot\sin(x)$$
2. $$y=\frac{\sec(x)}{1+\tan(x)$$
#### Find limits.
1. $$\lim_{x\to 0} \frac{\sin(7x)}{4x}$$
2. $$lim_{x\to 0} x\cdot \cot(x)$$ 




