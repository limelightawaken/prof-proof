import type { FormulaNote } from "./types";

export const primerNotes: Record<string, FormulaNote> = {
  "no-sentence": {
    notation: "lim means limit. The subscript x → 0 says the input x is approaching 0. sin x is the sine of x, with x in radians. The fraction bar divides sin x by x. The equals sign claims the limit is the number 1.",
    proof: "For x ≠ 0 the quotient is defined. The standard squeeze, or the geometric argument that the length of the vertical segment sin x sits between the arc x and the tangent segment tan x for small positive x, gives cos x < (sin x)/x < 1 after rearranging, for 0 < |x| < π/2. As x → 0, cos x → 1, so the squeeze theorem forces (sin x)/x → 1. The value at 0 is never used: the limit only consults inputs other than 0.",
  },
  "no-builder": {
    notation: "The braces name a set. x ∈ ℝ says the candidates are real numbers. The colon says “such that.” x² < 2 is the test a candidate must pass.",
    proof: "A real x is in the set exactly when x² < 2. For x ≥ 0 this is x < √2, because the square-root function is increasing on the nonnegative reals and (√2)² = 2. For x < 0, x² < 2 is the same as |x| < √2, hence −√2 < x. Combining the sides gives −√2 < x < √2. So the builder describes the open interval (−√2, √2), and the two descriptions have the same elements.",
  },
  "no-quantifiers": {
    notation: "∀ means “for every.” ∃ means “there exists.” n and m range over ℤ, the integers. m > n says m is strictly larger than n. Parentheses group the claim that is being quantified.",
    proof: "Fix an arbitrary integer n. Choose m = n + 1. Then m is an integer and m > n. Since n was arbitrary, every integer has a strictly larger integer, which is the first sentence. The swapped sentence asks for one integer m that exceeds every integer n. Taking n = m gives m > m, which is false. So no such m exists, and the two sentences are not the same claim.",
  },
  "no-equals": {
    notation: "The symbol := is definition, not an equation to be solved. The colon sits on the side of the new name. s is the name being introduced. a and b are quantities already in scope. The plus sign is ordinary addition.",
    proof: "A definition assigns a name. After s := a + b, the symbol s is an abbreviation for the value of a + b. Substituting the definiens gives s = a + b, which is true because both sides name that same value. There is nothing to solve: a and b were not constrained, and s was not an unknown. If a or b later changes, s changes with them only if the definition is still in force.",
  },
  "no-sum": {
    notation: "Σ is a sum. The lower index i = 1 and the upper index n say that i runs through the integers 1, 2, …, n. aᵢ is the i-th term. The right-hand side writes those terms in order, separated by plus signs, and the dots stand for the omitted middle terms.",
    proof: "By the meaning of a finite sum, the left side is the result of starting at 0 and adding aᵢ once for each integer i from 1 through n. That is exactly a₁ + a₂ + ··· + aₙ. The index i does not survive: it is used up by the instruction to add. Replacing i by another letter throughout both sides does not change either side.",
  },
  "no-arrows": {
    notation: "f is the name of a function. A → B says the inputs come from the set A and the outputs are declared to lie in B. x ↦ f(x) says a typical input x is sent to the value f(x). The two arrows do different jobs: → is between sets, ↦ is between an input and its output.",
    proof: "Suppose f: A → B is given. For each x in A there is exactly one output in B, written f(x). The rule x ↦ f(x) records those pairs and no others. Conversely, a rule that assigns to each x in A a single element f(x) of B is a function from A to B. The two lines are the same data: domain, codomain, and the output of each input.",
  },
  "no-stacks": {
    notation: "sin is the sine function. The upper 2 on the left is the trigonometric convention for squaring the value. Parentheses on the right force the square to apply to the whole value sin x. sin⁻¹ and arcsin both name the inverse sine, the angle in [−π/2, π/2] whose sine is x.",
    proof: "By the convention used on this desk, sin² x means (sin x) · (sin x), which is the right-hand side. For the inverse: let y = arcsin x, so y ∈ [−π/2, π/2] and sin y = x. The symbol sin⁻¹ x is defined to be that same y. Therefore sin⁻¹ x = arcsin x. It is not 1/sin x; that reciprocal is (sin x)⁻¹, with the exponent outside the value.",
  },
  "no-log": {
    notation: "log_a x is the logarithm of x with base a. y is the number claimed to be that logarithm. a^y is a raised to the power y. The double arrow says the two sentences are true for exactly the same pairs (x, y), with a > 0, a ≠ 1, and x > 0.",
    proof: "The exponential f(y) = a^y is a bijection from the reals onto the positive reals when a > 0 and a ≠ 1. So for each x > 0 there is exactly one real y with a^y = x. The logarithm is defined to be that exponent. Hence y = log_a x if and only if a^y = x. Exponentiating the left sentence recovers the right, and taking log_a of the right sentence recovers the left.",
  },
  "no-indices": {
    notation: "On the left, n is a subscript, so aₙ is the n-th term of a list. On the right, n is a superscript, so aⁿ is the number a raised to the n-th power. “Versus” marks the contrast. The same letter n is an index in one reading and an exponent in the other.",
    proof: "These are different operations. If aₙ = n and a = 2, then a₃ = 3, while a³ = 8. No algebraic identity converts a subscript into a superscript. The proof of the distinction is the pair of definitions: a subscript selects an entry, and a superscript counts factors in a product. Parentheses, as in a^{(n)}, are used when an author needs an upper index that is not a power.",
  },
  "no-bars": {
    notation: "In |x − a|, the bars are absolute value and a is a point on the line. In |A|, A is a set and the bars mean the number of elements. In ‖v‖, v is a vector and the double bar is its length. The three expressions are written together because the bars look alike.",
    proof: "Absolute value is defined by distance: |x − a| = √((x − a)²), which is nonnegative. Cardinality |A| counts elements and is not a distance. The Euclidean length ‖⟨v₁, v₂⟩‖ = √(v₁² + v₂²) is one number for the whole vector, not the absolute value of each component. Each formula follows from its own definition, and substituting an object of the wrong kind makes the expression meaningless rather than equal to one of the others.",
  },
  "no-subset": {
    notation: "A and B are sets. ⊆ means “is a subset of,” and this desk allows equality. The line claims every element of A is an element of B.",
    proof: "Assume A ⊆ B, and take any x ∈ A. By the definition of ⊆, x ∈ B. Conversely, if every element of A is an element of B, the definition says A ⊆ B. Equality is included: if A = B, then every element of A is an element of B, so A ⊆ B. Proper containment, which forbids equality, is a stronger claim and is not what this symbol says.",
  },
  "no-infinity": {
    notation: "n is a real variable or an integer index. The arrow → means “approaches.” ∞ is not a real number; it marks unbounded growth. The line says n grows past every fixed real bound.",
    proof: "The sentence n → ∞ means: for every real M there exists a stage after which n > M. It does not assert that n equals some real called ∞, because no real is larger than every real. In particular the arithmetic ∞ − ∞ is not licensed by this notation. If n is the index of a sequence, the same quantifiers say the indices eventually exceed every bound, which is how an infinite tail is described.",
  },
  "no-fraction": {
    notation: "The long bar groups a + b as the numerator and c as the denominator. The right-hand side multiplies a by 1/c and b by 1/c, then adds. The side condition c ≠ 0 is required for division.",
    proof: "If c ≠ 0, then 1/c exists, and (a + b)/c = (a + b) · (1/c) = a · (1/c) + b · (1/c) by the distributive law. That is the right-hand side. The same identity fails if the bar is read as covering only b, because a + b/c = a + b · (1/c), missing the term a/c whenever a ≠ 0.",
  },
  "no-bar-meanings": {
    notation: "3 ∣ 12 says 3 divides 12. The braces with a bar, {x ∣ x > 0}, use the bar as “such that.” [F(x)] with a lower a and an upper b is the evaluation bar: compute F at b and subtract F at a. One stroke, three positions, three meanings.",
    proof: "3 ∣ 12 holds because 12 = 3 · 4 and 4 is an integer. The set {x ∣ x > 0} contains exactly the positive reals, by the set-builder reading of the bar. The evaluation identity [F(x)]_a^b = F(b) − F(a) is the definition of that bar in calculus; it is not an absolute value, because an absolute value does not carry two limits and does not subtract. The three claims are proved from three definitions, distinguished by what sits on each side of the stroke.",
  },
  "nb-families": {
    notation: "ℕ, ℤ, ℚ, and ℝ are the naturals, the integers, the rationals, and the reals. ⊂ means proper subset: the left set sits inside the right set and is not all of it.",
    proof: "Every natural number is an integer, and −1 is an integer that is not natural, so ℕ is a proper subset of ℤ. Every integer n equals n/1, so ℤ ⊆ ℚ, and 1/2 is rational but not an integer. Every rational is real, and √2 is real but not rational: if √2 = p/q in lowest terms then p² = 2q², so p and q are both even, contradicting lowest terms. Thus each inclusion is proper.",
  },
  "nb-fractions": {
    notation: "a/b and c/d are fractions. The double arrow says the two sentences are equivalent. ad and bc are ordinary products. The denominators b and d are assumed nonzero.",
    proof: "If b and d are nonzero and a/b = c/d, multiply both sides by bd to get ad = bc. Conversely, if ad = bc and b, d ≠ 0, divide both sides by bd to get a/b = c/d. The multiplications are legal because bd ≠ 0, and they are reversible. So the fractions are equal exactly when the cross-multiples are equal.",
  },
  "nb-exponents": {
    notation: "a is the base. m and n are exponents, here nonnegative integers. aᵐ means a multiplied by itself m times. The left side multiplies two such stacks. The right side is a single stack whose height is the sum of the exponents.",
    proof: "aᵐ is a product of m factors of a, and aⁿ is a product of n factors. Their product is a product of m + n factors, which is aᵐ⁺ⁿ. The argument counts factors, so it needs m and n to be nonnegative integers and uses a⁰ = 1 for an empty product when a ≠ 0. It does not say that aᵐ⁺ⁿ equals aᵐ + aⁿ.",
  },
  "nb-roots": {
    notation: "√ is the nonnegative square root. a² is a squared. |a| is the absolute value of a, the distance from a to 0.",
    proof: "Both |a| and −|a| square to a². The symbol √ returns the nonnegative root, and |a| is nonnegative, and (|a|)² = a². A nonnegative number with a given square is unique, because if 0 ≤ u < v then u² < v². Therefore √(a²) = |a|. If a is negative this is −a, not a.",
  },
  "nb-absolute": {
    notation: "|x − a| is the distance from x to a. r is a positive tolerance. The double arrow is equivalence. a − r < x < a + r says x lies strictly between a − r and a + r.",
    proof: "By definition, |x − a| < r means the distance from x to a is less than r, and r > 0. That is −r < x − a < r. Adding a to all three parts, which preserves inequalities, gives a − r < x < a + r. Each step reverses, so the two sentences describe the same set of x.",
  },
  "nb-distribute": {
    notation: "a, b, and c are numbers. The left side multiplies a by the sum b + c. The right side multiplies a by each term and adds the products.",
    proof: "Multiplication is repeated addition when the multiplier is a positive integer: a(b + c) adds (b + c) to itself a times, which is a copies of b plus a copies of c, hence ab + ac. The identity extends to all reals because both sides are continuous in a and agree on the positive integers, or directly from the field axioms, which take distributivity as the link between the two operations. The same sentence read backwards is factoring.",
  },
  "nb-percent": {
    notation: "p is a number. The percent sign means “per hundred.” p/100 is the fraction with numerator p and denominator 100.",
    proof: "“Per hundred” means divide by 100. So p percent is p parts out of 100, which is the fraction p/100. Multiplying a quantity by p% is multiplying by that fraction. For a check: 15% of 40 is (15/100) · 40 = 6.",
  },
  "al-linear": {
    notation: "a, b, and c are fixed numbers, and a ≠ 0. x is the unknown. The double arrow says the equation and the solved form have the same solution. The fraction is (c − b) divided by a.",
    proof: "Start from ax + b = c. Subtract b from both sides: ax = c − b. Since a ≠ 0, divide both sides by a: x = (c − b)/a. Each step is reversible, subtraction by adding b and division by multiplying by a, so no solutions are lost or added. If a were 0 the division would be illegal, and the original equation would be either true for every x or true for none.",
  },
  "al-quadratic": {
    notation: "a, b, and c are the coefficients of ax² + bx + c = 0, with a ≠ 0. ± means both signs. √ is the nonnegative square root of the discriminant b² − 4ac. The fraction bar covers the whole numerator.",
    proof: "Divide ax² + bx + c = 0 by a and move the constant: x² + (b/a)x = −c/a. Add (b/(2a))² to both sides. The left side becomes (x + b/(2a))², and the right side is (b² − 4ac)/(4a²). If the discriminant is nonnegative, take both square roots: x + b/(2a) = ±√(b² − 4ac) / (2a). Subtract b/(2a) to obtain the formula. If the discriminant is negative there is no real square root and no real solution.",
  },
  "al-zero-product": {
    notation: "a and b are real numbers. ab is their product. The double arrow is equivalence. “or” is inclusive, though both factors being zero is allowed and still fits.",
    proof: "If a = 0 or b = 0, then ab = 0 because zero times anything is zero. Conversely, suppose ab = 0 and a ≠ 0. Then a has a reciprocal, and multiplying both sides by it gives b = 0. So at least one factor is zero. The argument uses that a nonzero real has a reciprocal. It does not work with a right-hand side other than zero: ab = 6 does not force a = 6 or b = 6.",
  },
  "al-exponent-laws": {
    notation: "(a + b)² means the sum a + b multiplied by itself. a² and b² are the squares of the separate terms. 2ab is twice the product of a and b.",
    proof: "(a + b)² = (a + b)(a + b). Distribute: a(a + b) + b(a + b) = a² + ab + ba + b². Addition and multiplication of real numbers commute, so ab + ba = 2ab. Therefore (a + b)² = a² + 2ab + b². The cross term is present whenever ab ≠ 0. Dropping it is not an identity.",
  },
  "al-rational": {
    notation: "The left side divides x² − 1 by x − 1. The right side is the linear polynomial x + 1. The side condition x ≠ 1 excludes the input that makes the denominator zero.",
    proof: "x² − 1 = (x − 1)(x + 1), by the difference of squares or by expanding the right-hand product. For x ≠ 1 the factor x − 1 is nonzero and may be canceled, leaving x + 1. At x = 1 the original quotient is undefined, so the identity is claimed only on the domain where both sides are defined. The two expressions agree at every allowed input and nowhere else is being asserted.",
  },
  "al-inequality": {
    notation: "x < 4 says x is strictly less than 4. ∈ means “is an element of.” (−∞, 4) is the open interval of all reals less than 4. The parenthesis at 4 excludes 4, and ∞ is not an endpoint that is attained.",
    proof: "By the definition of that interval notation, x ∈ (−∞, 4) means x is a real number and x < 4. That is the same sentence as the left side. The endpoint 4 fails x < 4, so it is excluded, which is what the round parenthesis records.",
  },
  "al-complete-square": {
    notation: "x is the variable and b is the coefficient of x. (b/2)² is the square of half of b. The right side is the square of the binomial x + b/2.",
    proof: "Expand the right side: (x + b/2)² = x² + 2 · x · (b/2) + (b/2)² = x² + bx + (b/2)². That is the left side. The identity is an equality of polynomials, true for every x and every b. In an equation, the added square must be added to both sides or compensated on the right, or the solution set changes.",
  },
  "fn-composition": {
    notation: "f ∘ g is the composition, f after g. (f ∘ g)(x) is its value at x. f(g(x)) means: compute g at x, then apply f to that output.",
    proof: "Composition is defined by that instruction. So the equality is the definition, and it holds for every x in the domain of g such that g(x) is in the domain of f. It is not the product f(x)g(x). Order matters because f(g(x)) and g(f(x)) apply different functions first, and those outputs differ in general: if f(t) = t + 1 and g(t) = 2t, then f(g(1)) = 3 and g(f(1)) = 4.",
  },
  "fn-inverse": {
    notation: "f⁻¹ is the inverse function of f, not the reciprocal 1/f. f⁻¹(f(x)) applies f first and then the inverse. The right side is the input x unchanged.",
    proof: "If g is a two-sided inverse of f, then g(f(x)) = x for every x in the domain of f, by the definition of a left inverse. Taking g = f⁻¹ gives the displayed line. It requires f to be one-to-one on the domain where the inverse was built. The reciprocal satisfies (1/f(x)) · f(x) = 1, which is a different equation and does not return x.",
  },
  "fn-line": {
    notation: "m is the slope. (x₁, y₁) and (x₂, y₂) are two points on the line, with x₁ ≠ x₂. The numerator is the change in output. The denominator is the change in input.",
    proof: "On a straight line the ratio of vertical change to horizontal change is constant. Between the two points that ratio is (y₂ − y₁)/(x₂ − x₁). Reversing both subtractions multiplies numerator and denominator by −1 and does not change the quotient. If x₁ = x₂ the denominator is zero, the line is vertical, and this formula does not apply.",
  },
  "fn-exponential": {
    notation: "a is a fixed positive base. x and y are real exponents. aˣ⁺ʸ is a raised to the sum of the exponents. The right side multiplies the two separate powers.",
    proof: "For positive integers the identity counts factors, as on the exponents card. For rational exponents it follows by writing powers as roots and using (a^{1/n})ⁿ = a. For real exponents one defines aˣ = exp(x ln a), where exp converts addition to multiplication: exp(u + v) = exp(u) exp(v). Then aˣ⁺ʸ = exp((x + y) ln a) = exp(x ln a) exp(y ln a) = aˣ aʸ. The base must be positive so that ln a is defined.",
  },
  "fn-log": {
    notation: "a is a base with a > 0 and a ≠ 1. log_a x is the exponent to which a must be raised to produce x. The side condition x > 0 keeps x in the domain. The right side is the input x.",
    proof: "By definition, log_a x is the unique real y such that a^y = x. Raising a to that exponent therefore returns x: a^{log_a x} = x. The logarithm is defined only for x > 0, so the identity is not claimed for negative inputs or for zero.",
  },
  "fn-even-odd": {
    notation: "f is a function whose domain is symmetric: whenever x is allowed, so is −x. f(−x) is the value at the opposite input. The first equation is the even case. The second, with a minus on the right, is the odd case. “or” here offers the two definitions, not a claim that every function satisfies one of them.",
    proof: "Evenness is the statement f(−x) = f(x) for every x in the domain. Oddness is f(−x) = −f(x) for every such x. If a function satisfies both, then f(x) = −f(x), so 2f(x) = 0 and f(x) = 0. A function can satisfy neither: eˣ is a standard example, since e⁻¹ is neither e¹ nor −e¹. Checking one sample input does not prove either identity.",
  },
  "fn-piecewise": {
    notation: "The brace presents cases. The condition x ≥ 0 selects the first formula, which returns x. The condition x < 0 selects the second, which returns −x, the opposite of x. |x| is the absolute value.",
    proof: "If x ≥ 0, the distance from x to 0 is x itself, so |x| = x. If x < 0, the distance is the positive number −x, so |x| = −x. These cases cover every real exactly once. Squaring shows both formulas agree with √(x²), the nonnegative square root, which is another definition of absolute value.",
  },
  "tg-ratios": {
    notation: "θ is an acute angle in a right triangle. sin θ is its sine. “opposite” is the leg across from θ. “hypotenuse” is the side opposite the right angle, the longest side.",
    proof: "This is the definition of sine for an acute angle: the ratio of those two lengths. It is well-defined because any two right triangles with the same acute angle are similar, so the ratio does not depend on the size of the drawing. The hypotenuse is nonzero. The same definition gives cosine as adjacent over hypotenuse, and dividing sine by cosine produces opposite over adjacent, which is tangent.",
  },
  "tg-circle": {
    notation: "The pair is a point in the plane. cos θ is the horizontal coordinate and sin θ the vertical coordinate. θ is the angle from the positive horizontal axis, measured in radians, counterclockwise when positive.",
    proof: "On the unit circle the point at angle θ is defined to have those coordinates. Dropping a perpendicular to the horizontal axis recovers a right triangle of hypotenuse 1 when the point is not on an axis, so the triangle ratios agree with the coordinates. The distance to the origin is √(cos² θ + sin² θ) = 1 by the equation of the circle. This extends sine and cosine beyond acute angles, signs included.",
  },
  "tg-radians": {
    notation: "180° is a half turn in degrees. π is the number pi, about 3.1416. “π radians” is the angle whose arc on the unit circle has length π.",
    proof: "The unit circle has circumference 2π, so a full turn is 2π radians. A half turn is half of that arc, length π, and a half turn is also 180°. Therefore 180° = π radians as angles. Multiplying an angle in degrees by π/180 converts it to radians. The number π itself is not an angle; the unit “radians” is part of the right-hand side.",
  },
  "tg-waves": {
    notation: "y is the output and x the input. A scales the height. B scales the input. C shifts the input. D shifts the output. sin is the sine function, in radians.",
    proof: "The graph of sin has midline 0, amplitude 1, and period 2π. Multiplying the output by A stretches the height by |A|, and a negative A reflects it. Replacing x by B(x − C) makes the input run |B| times as fast and delays it until x = C, so the period becomes 2π/|B| and the graph shifts right by C. Adding D raises every output by D, which moves the midline to y = D.",
  },
  "tg-pythagoras": {
    notation: "sin² θ means (sin θ)², and cos² θ means (cos θ)². θ is any real angle, in radians. The right side is the number 1.",
    proof: "The point (cos θ, sin θ) lies on the unit circle, so its distance to the origin is 1. By the distance formula, cos² θ + sin² θ = 1. For an acute angle the same identity is the Pythagorean theorem divided by the square of the hypotenuse. It gives the square of the missing ratio; the quadrant, or an extra sign condition, is needed to choose the square root.",
  },
  "tg-sum": {
    notation: "a and b are angles. sin(a + b) is the sine of the combined angle. The right side adds two products: sin a times cos b, and cos a times sin b.",
    proof: "Rotation by a + b is rotation by a followed by rotation by b. The point (cos a, sin a), rotated by b, has coordinates (cos b cos a − sin b sin a, sin b cos a + cos b sin a). The second coordinate is sin(a + b). Rewriting it as sin a cos b + cos a sin b gives the formula. It is not sin a + sin b: at a = b = π/2 the left side is 0 and the sum of sines is 2.",
  },
  "tg-inverse": {
    notation: "arcsin is the inverse sine function. The arrow from [−1, 1] to [−π/2, π/2] says those are the domain and the codomain. Brackets include the endpoints.",
    proof: "Sine is continuous and strictly increasing from −π/2 to π/2, with sin(−π/2) = −1 and sin(π/2) = 1. A continuous strictly increasing function hits every value between its endpoint values exactly once. Therefore sine restricts to a bijection from [−π/2, π/2] onto [−1, 1], and the inverse function has the displayed domain and codomain. It returns one angle, not every angle with the same sine.",
  },
  "tg-cosine-law": {
    notation: "a, b, and c are the side lengths of a triangle. C is the angle between sides a and b, opposite side c. cos C is the cosine of that angle.",
    proof: "Place C at the origin and side b along the positive horizontal axis. The third vertex is then at (a cos C, a sin C), and the end of side b is at (b, 0). The squared distance between them is (a cos C − b)² + (a sin C)² = a² cos² C − 2ab cos C + b² + a² sin² C. Since cos² C + sin² C = 1, this is a² + b² − 2ab cos C, which is c². When C = π/2, cos C = 0 and the identity becomes Pythagoras.",
  },
  "tg-period": {
    notation: "θ is an angle. k is an integer. 2πk is k full turns. sin is sine. The equation says those angles have the same sine.",
    proof: "Adding 2π radians is one full turn, which returns every point on the unit circle to itself. Adding it k times, for any integer k, does the same. The point at angle θ + 2πk is therefore the point at angle θ, and the two points have the same vertical coordinate. That coordinate is the sine. The same argument gives the identity for cosine. Tangent repeats after only half a turn, which this line does not claim.",
  },
  "cl-limit": {
    notation: "lim is a limit. x → a says the input approaches a. f(x) is the output. L is the number the outputs approach. The value f(a) is not written, because it is not part of the claim.",
    proof: "The equality means: for every tolerance ε > 0 there is a δ > 0 such that 0 < |x − a| < δ implies |f(x) − L| < ε. The restriction 0 < |x − a| excludes x = a, so f(a) can be anything or undefined. If the outputs approach different numbers from the two sides, no single L satisfies the definition, and the two-sided limit does not exist.",
  },
  "cl-derivative": {
    notation: "f'(a) is the derivative of f at a. h is a small change in the input, not equal to zero inside the fraction. The fraction is the slope of the secant from a to a + h. lim as h → 0 takes the limit of those slopes.",
    proof: "The difference quotient equals the secant slope by the two-point slope formula. If that quotient approaches a number as h → 0 through values other than 0, the derivative is defined to be that number. For f(x) = x² at x = 3, the quotient simplifies to 6 + h for h ≠ 0, whose limit is 6, so f'(3) = 6. Setting h = 0 before canceling divides by zero and is not the limit.",
  },
  "cl-power": {
    notation: "d/dx means differentiate with respect to x. n is a positive integer in the argument below. xⁿ is the n-th power. The right side multiplies by n and lowers the exponent by 1.",
    proof: "The difference quotient of xⁿ is ((x + h)ⁿ − xⁿ)/h. Expand (x + h)ⁿ by the binomial theorem. The xⁿ terms cancel. Every remaining term has a factor h, and dividing by h leaves n xⁿ⁻¹ plus terms that still contain h. Let h → 0. Those terms vanish, leaving n xⁿ⁻¹. The same formal rule holds for real exponents on x > 0, by writing x^r = exp(r ln x) and differentiating with the chain rule.",
  },
  "cl-product": {
    notation: "f and g are differentiable functions. (fg)' is the derivative of their product. f' and g' are the separate derivatives. The right side adds the two ways one factor can change while the other is held.",
    proof: "The difference quotient of fg is [f(x+h)g(x+h) − f(x)g(x)]/h. Add and subtract f(x+h)g(x) in the numerator. The quotient splits into f(x+h) · (g(x+h) − g(x))/h + g(x) · (f(x+h) − f(x))/h. Let h → 0. Differentiability gives continuity, so f(x+h) → f(x), and the two quotients become g' and f'. The product of the derivatives is not this expression: for f = g = x it would give 1, while (x²)' = 2x.",
  },
  "cl-chain": {
    notation: "f'(g(x)) is the derivative of the outer function, evaluated at the inner value g(x). g'(x) is the derivative of the inner function at x. The product is the derivative of the composition.",
    proof: "Write Δf = f(g(x) + Δg) − f(g(x)) and Δg = g(x+h) − g(x). Then Δf/h = (Δf/Δg) · (Δg/h) when Δg ≠ 0. As h → 0, Δg → 0, the first factor approaches f'(g(x)), and the second approaches g'(x). The case Δg = 0 for a sequence of h is handled by continuity of the difference quotient of f, or by the definition of differentiability. For (3x + 1)⁵ the outer derivative contributes 5(3x + 1)⁴ and the inner derivative contributes the factor 3.",
  },
  "cl-sine-exp": {
    notation: "d/dx differentiates with respect to x, in radians. sin x and cos x are sine and cosine. eˣ is the exponential function with base e. The two equations are separate claims written on one line.",
    proof: "The angle-addition formula gives sin(x+h) − sin x = sin x (cos h − 1) + cos x sin h. Divide by h. As h → 0, (sin h)/h → 1 and (cos h − 1)/h → 0, in radians, so the derivative is cos x. For the exponential, eˣ is defined so that its derivative equals itself and e⁰ = 1; equivalently, the series ∑ xⁿ/n! differentiates term by term to itself. Differentiating sin(3x) still requires the chain rule, which supplies a factor 3.",
  },
  "cl-integral": {
    notation: "The long S is an integral. a and b are the limits, the start and end of the interval. f(x) is the height. dx marks x as the dummy variable of integration. No numerical value is claimed until f, a, and b are specified.",
    proof: "Partition [a, b], pick a sample point in each piece, and add height times width. If f is continuous, these Riemann sums approach one number as the mesh shrinks, independent of the sample points. That number is the integral. Area below the axis has a negative height, so it subtracts. Renaming x to t renames the dummy and does not change the sums. Reversing a and b reverses every width and changes the sign.",
  },
  "cl-ftc": {
    notation: "The integral of f from a to b is the signed area. F is an antiderivative, so F' = f. F(b) − F(a) evaluates it at the ends and subtracts. The side condition records the hypothesis.",
    proof: "Let A(x) = ∫_a^x f, with f continuous. The difference quotient of A is the average value of f on [x, x+h], which approaches f(x) as h → 0. So A' = f. If F is any other antiderivative, (F − A)' = 0, so F − A is constant on the interval. Therefore F(b) − F(a) = A(b) − A(a) = ∫_a^b f. The constant of integration cancels in the subtraction.",
  },
  "cl-substitution": {
    notation: "f' is the derivative of f. g(x) is the inside function and g'(x) its derivative. The integral is indefinite. C is an arbitrary constant. The right side is f evaluated at g(x), plus C.",
    proof: "Differentiate the right side by the chain rule: the derivative of f(g(x)) is f'(g(x)) g'(x), and the derivative of C is 0. An indefinite integral is the family of antiderivatives, so ∫ f'(g(x)) g'(x) dx = f(g(x)) + C. The factor g'(x) has to be present. Without it, the chain rule does not run backwards and the substitution is not justified.",
  },
  "cl-sequence": {
    notation: "aₙ is the n-th term. n is a positive integer. The fraction is n divided by n + 1.",
    proof: "aₙ − 1 = n/(n+1) − 1 = −1/(n+1), so |aₙ − 1| = 1/(n+1). Given ε > 0, choose an integer N > 1/ε − 1. Then n ≥ N implies 1/(n+1) < ε. By the definition of a sequence limit, aₙ → 1. The terms never need to equal 1. They only need to stay within every tolerance eventually.",
  },
  "vc-distance": {
    notation: "The square root is the nonnegative root. (x₁, y₁) and (x₂, y₂) are the endpoints. Each squared term is a change in one coordinate.",
    proof: "The horizontal gap and the vertical gap are the legs of a right triangle whose hypotenuse is the segment. Pythagoras says the squared hypotenuse is (x₂ − x₁)² + (y₂ − y₁)². Length is nonnegative, so take the nonnegative square root. Squaring makes the order of subtraction irrelevant. The sum of squares without the root is not the length.",
  },
  "vc-add": {
    notation: "Angle brackets hold the components of a plane vector. u₁ and u₂ are the components of the first vector, v₁ and v₂ those of the second. The right side adds matching components.",
    proof: "Place the second arrow so its tail is the head of the first. The total horizontal displacement is u₁ + v₁, and the total vertical displacement is u₂ + v₂. That combined displacement is the sum. Componentwise addition is commutative and associative because addition of numbers is. The zero vector, both components 0, leaves a vector unchanged.",
  },
  "vc-dot": {
    notation: "u · v is the dot product, a number. |u| and |v| are the lengths. θ is the angle between the directions, taken between 0 and π. cos θ is its cosine.",
    proof: "The law of cosines in the triangle with sides u, v, and u − v gives |u − v|² = |u|² + |v|² − 2|u||v| cos θ. Expand the left side with |w|² = w · w: |u|² − 2 u · v + |v|². Cancel |u|² + |v|² from both sides and divide by −2 to get u · v = |u||v| cos θ. In components, the same product is u₁v₁ + u₂v₂. It is zero exactly when the angle is a right angle, if neither vector is zero.",
  },
  "vc-multiply": {
    notation: "A is a matrix with two columns. The column (x, y) is the input vector. “column 1” and “column 2” are those columns of A, read as vectors. The right side is a linear combination.",
    proof: "Write the input as x(1, 0) + y(0, 1). A linear map sends this to x times the image of (1, 0) plus y times the image of (0, 1). Those images are the columns of A. Therefore Ax equals x times the first column plus y times the second. Matrix multiplication is defined so that this holds. Doing B first and then A is the product AB, not BA.",
  },
  "vc-determinant": {
    notation: "det is the determinant. The matrix has first row a, b and second row c, d. ad is the product of the main diagonal. bc is the product of the other diagonal.",
    proof: "The columns are (a, c) and (b, d). The signed area of the parallelogram they span is the base times the height, with a sign for orientation. Placing the first column as base, that area equals ad − bc. It is zero exactly when one column is a scalar multiple of the other, because then the height is zero. A negative value means the second column sits clockwise from the first, not that the area is negative. The geometric area is the absolute value.",
  },
  "vc-line": {
    notation: "(x, y) is a point on the line. (x₀, y₀) is a fixed point on it. t is a real parameter. ⟨v₁, v₂⟩ is a direction vector. The right side starts at the point and adds t times the direction.",
    proof: "Every multiple t⟨v₁, v₂⟩ is a displacement parallel to the direction, of signed length t times the direction’s length. Adding it to (x₀, y₀) stays on the unique line through that point with that direction. Every point of the line arises once, by taking t to be the signed number of direction-steps from the start. A second point (x₂, y₂) determines the direction ⟨x₂ − x₀, y₂ − y₀⟩, not the position ⟨x₂, y₂⟩.",
  },
  "lg-implication": {
    notation: "P and Q are statements. P ⇒ Q means “if P, then Q.” The arrow points from the hypothesis to the conclusion.",
    proof: "The implication is defined to be false only when P is true and Q is false. In the other three truth combinations it is true. So if P is false, the implication holds whether Q is true or false. A counterexample must make P true and Q false. Proving P ⇒ Q by assuming P and deriving Q matches this table: the only dangerous row is the one just ruled out.",
  },
  "lg-iff": {
    notation: "P ⇔ Q means “P if and only if Q.” It is the conjunction of P ⇒ Q and Q ⇒ P. Both arrows are part of the symbol.",
    proof: "By definition, P ⇔ Q is true exactly when both implications are true. A proof therefore has two parts. From P ⇔ Q one may replace P by Q inside a larger claim, because they have the same truth value. One direction alone does not justify the double arrow. “P is necessary for Q” is Q ⇒ P, and “P is sufficient for Q” is P ⇒ Q. Both are required here.",
  },
  "lg-order": {
    notation: "∀ is “for every” and ∃ is “there exists.” n and m are integers. “is not” denies that the first sentence implies the second. The parentheses show which quantifier governs the inequality.",
    proof: "The first sentence is true: given n, take m = n + 1. The second is false: an m larger than every integer would be larger than itself. A true sentence does not imply a false one. Therefore the implication fails. The proof is a counterexample to the swapped order, not a claim that existence is always illegal. It shows that moving ∃ to the left of ∀ changes the meaning.",
  },
  "lg-induction": {
    notation: "P(n) is a statement about the integer n. n₀ is the starting integer. The first clause is the base case. The second says that for every k at least n₀, if P(k) is true then P(k+1) is true.",
    proof: "Suppose P(n₀) holds and the step holds. If some integer n ≥ n₀ failed, the least such integer could not be n₀, so it would be k + 1 for a k ≥ n₀ at which P(k) is true. The step would force P(k+1), a contradiction. Hence no failing integer exists. The base and the step are both used. Checking several numerals is not this argument, and there is no “next real,” so the principle does not apply to the real line.",
  },
};
