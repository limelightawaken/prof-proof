export type Gloss = {
  id: string;
  tex?: string;
  plain?: string;
  speak: string;
  note: string;
};

export type Reading = {
  id: string;
  tex: string;
  aloud: string;
  gloss: string;
};

export type GlossGroup = {
  id: string;
  title: string;
  lead: string;
  readings?: Reading[];
  items: Gloss[];
};

export const notationGuide: GlossGroup[] = [
  {
    id: "sentence",
    title: "A formula is a sentence",
    lead: "Read every formula from left to right, out loud, as English with the verbs put back in. The small words carry the claim: for every, there exists, such that, if, then. The letters are only the nouns. A symbol means what the sentence around it says, and the same mark can change jobs from one shelf to the next.",
    readings: [
      {
        id: "read-limit",
        tex: "\\lim_{x\\to 0}\\frac{\\sin x}{x}=1",
        aloud: "The limit, as x approaches 0, of sine of x over x, equals 1.",
        gloss: "It does not say that the fraction at x = 0 equals 1. At 0 the expression is 0/0, which is undefined. It says the values at nearby inputs settle at 1. The limit watches the neighbors, not the missing point.",
      },
      {
        id: "read-epsilon",
        tex: "\\forall\\varepsilon>0\\ \\exists N\\in\\mathbb{N}\\ \\forall n\\ge N\\quad |a_n-L|<\\varepsilon",
        aloud: "For every epsilon greater than 0, there exists a natural number N, such that for every n at least N, the distance from aₙ to L is less than epsilon.",
        gloss: "The order is the meaning. Epsilon is chosen first, by a challenger. N is chosen second, and it may depend on that epsilon. Then every later term, not merely one of them, has to sit inside the window. Swap the quantifiers and you have said something much stronger, usually false.",
      },
    ],
    items: [
      {
        id: "order",
        plain: "left to right",
        speak: "Read in order",
        note: "Whatever is written first has already been chosen when you read what follows. In ∀x ∃y, the y is allowed to depend on the x. In ∃y ∀x, one y has to work for every x.",
      },
      {
        id: "such-that",
        tex: "\\{x : P(x)\\}",
        speak: "Such that",
        note: "The colon, and sometimes a vertical bar, says “such that.” {x : x² < 2} is “the set of x such that x squared is less than 2.” In number theory a single bar between numbers, a ∣ b, means “a divides b.” The surrounding sentence tells you which bar you are looking at.",
      },
      {
        id: "omitted",
        plain: "for all, unspoken",
        speak: "Words left out",
        note: "“Let f be continuous” usually means “for every point of the domain, f is continuous there.” Authors drop “for all” when a letter is free in a definition. If you cannot tell what is being claimed for every x, put the words back in before you trust the line.",
      },
    ],
  },
  {
    id: "letters",
    title: "The letters",
    lead: "A letter is a name, not a different kind of number. The sentence that introduced it says whether the name is fixed for the problem, unknown, or free to range. The same letter can do different jobs on different shelves.",
    items: [
      {
        id: "inputs",
        tex: "x,\\ y,\\ t",
        speak: "Inputs and unknowns",
        note: "x and y are the usual names for a number that varies or that you are solving for. t is often time, or the parameter that walks along a line. Nothing forces x and y to be different numbers unless the problem says so.",
      },
      {
        id: "indices",
        tex: "n,\\ m,\\ k,\\ i",
        speak: "Whole-number counters",
        note: "These usually name integers: the n-th term, the k-th step, an index in a sum. An index is a counter. Renaming i to j throughout a sum does not change the sum. That is a dummy name.",
      },
      {
        id: "constants",
        tex: "a,\\ b,\\ c",
        speak: "Constants, for now",
        note: "Early letters often stay fixed while x varies. “Fixed” means fixed inside the current problem. A constant can still be any number the problem allows. Read the line that bound it.",
      },
      {
        id: "blackboard",
        tex: "\\mathbb{N}\\ \\mathbb{Z}\\ \\mathbb{Q}\\ \\mathbb{R}\\ \\mathbb{C}",
        speak: "The families, in blackboard bold",
        note: "ℕ naturals, ℤ integers, ℚ rationals, ℝ reals, ℂ complex numbers. This desk takes ℕ to include 0 when counting from zero, and says so. Some books start ℕ at 1. ℤ comes from Zahlen. The others are the English initials.",
      },
      {
        id: "greek-constants",
        tex: "\\alpha,\\ \\beta,\\ \\theta,\\ \\lambda",
        speak: "Greek names",
        note: "Alpha, beta, and theta often name angles or fixed scalars. Lambda often names an eigenvalue, or a multiplier. They are ordinary names. Pronounce them. Do not treat a Greek letter as a more advanced kind of number.",
      },
      {
        id: "epsilon",
        tex: "\\varepsilon,\\ \\delta",
        speak: "Epsilon and delta",
        note: "In analysis these are positive tolerances, small on purpose. Epsilon is usually the challenge: how close the output must be. Delta is the reply: how close the input must be. Capital delta Δ often means a change, as in Δx.",
      },
      {
        id: "pi",
        tex: "\\pi",
        speak: "Pi",
        note: "π is a number, about 3.1416, the circumference of a circle of diameter 1. “π radians” is an angle: half a turn. The number and the angle are related and are not the same phrase.",
      },
      {
        id: "letter-i",
        tex: "i",
        speak: "The letter i",
        note: "Three common jobs: an index in a sum, the imaginary unit with i² = −1, or a name for an inclusion. A single sentence uses one of those. If a sum runs over i and also contains the imaginary unit, a careful author renames one of them.",
      },
    ],
  },
  {
    id: "sets",
    title: "Sets and membership",
    lead: "A set is a collection of elements, determined by what is in it. The marks below are the verbs of that idea: belongs, is contained, union, intersection, and the set of all things such that.",
    readings: [
      {
        id: "read-builder",
        tex: "\\{x\\in\\mathbb{R}: x^2<2\\}",
        aloud: "The set of real x such that x squared is less than 2.",
        gloss: "The part before the colon says what kind of object is being collected, and from where. The part after the colon is the test an object must pass. This set is the open interval from −√2 to √2. It has no largest element.",
      },
    ],
    items: [
      {
        id: "element",
        tex: "\\in\\quad \\notin",
        speak: "In, and not in",
        note: "3 ∈ ℤ says 3 is an element of the integers. 1/2 ∉ ℤ says one half is not. Membership is about elements. It is not the same mark as “subset.”",
      },
      {
        id: "subset",
        tex: "\\subseteq\\quad \\subset",
        speak: "Subset",
        note: "A ⊆ B means every element of A is an element of B, and equality is allowed. Some authors use ⊂ for that same idea, and some use ⊂ to mean “subset and not equal.” ⊆ never means proper. On this desk, ⊆ allows equality, and ⊂ is used only when properness matters. Check the sentence.",
      },
      {
        id: "empty",
        tex: "\\emptyset\\quad \\{\\,\\}",
        speak: "The empty set",
        note: "The set with no elements. It is a subset of every set, because the claim “every element of it is in B” is vacuously true. {0} is not empty: it contains the number 0.",
      },
      {
        id: "union",
        tex: "\\cup\\quad \\cap\\quad \\setminus",
        speak: "Union, intersection, difference",
        note: "A ∪ B is everything in either. A ∩ B is everything in both. A ∖ B is what is in A and not in B. Union is “or,” intersection is “and,” difference is “and not,” applied to membership.",
      },
      {
        id: "product",
        tex: "A\\times B",
        speak: "Cartesian product",
        note: "The set of ordered pairs (a, b) with a in A and b in B. Order matters: (1, 2) and (2, 1) are different pairs. ℝ × ℝ is the plane.",
      },
      {
        id: "cardinality",
        tex: "|A|",
        speak: "How many, sometimes",
        note: "Vertical bars around a set often mean the number of elements. Around a number they mean absolute value. Around a vector they may mean length. Read the object inside before you pronounce the bars.",
      },
      {
        id: "intervals",
        tex: "(a,b)\\quad [a,b]",
        speak: "Intervals",
        note: "Parentheses exclude the endpoint. Square brackets include it. (0, 1) is everything strictly between 0 and 1. [0, 1] includes both ends. (0, 1] includes 1 and excludes 0. The same parentheses also write a point in the plane. “The interval (0, 1)” and “the point (0, 1)” are different phrases.",
      },
    ],
  },
  {
    id: "logic",
    title: "The logical words",
    lead: "These marks are the grammar of a claim. Say them as words. A proof is a reason that the sentence they make is true, not a rearrangement of the ink.",
    items: [
      {
        id: "not",
        tex: "\\neg P",
        speak: "Not",
        note: "The negation of a statement is the statement that is true exactly when the original is false. The negation of “for every x, P(x)” is “there exists an x with not P(x).” The negation of “and” is “or” of the negations.",
      },
      {
        id: "and-or",
        tex: "P\\land Q\\quad P\\lor Q",
        speak: "And, or",
        note: "And requires both. Mathematical or is inclusive: P or Q is true when both are true, unless the author writes “exactly one.” “Or” in a theorem is usually inclusive.",
      },
      {
        id: "implies",
        tex: "P\\Rightarrow Q",
        speak: "Implies",
        note: "“If P, then Q.” The only way this is false is when P is true and Q is false. If P is false, the implication is true. That is the vacuously true case, and it surprises people the first time. Q ⇒ P is a different sentence, the converse.",
      },
      {
        id: "iff",
        tex: "P\\Leftrightarrow Q",
        speak: "If and only if",
        note: "Both directions. P implies Q, and Q implies P. A proof of an “exactly when” has two parts, and one of them is easy to forget. People also write “iff.”",
      },
      {
        id: "forall",
        tex: "\\forall",
        speak: "For all",
        note: "Every object of the kind named satisfies the claim. One counterexample kills it. A list of examples, however long, does not prove it, unless the list is the whole domain and you have said so.",
      },
      {
        id: "exists",
        tex: "\\exists\\quad \\exists!",
        speak: "There exists, and exists unique",
        note: "∃ says at least one. It does not say how to find it, and it does not say there is only one. ∃! adds uniqueness. “There is a unique” is two claims: existence, and no second one.",
      },
    ],
  },
  {
    id: "equality",
    title: "Equality, definition, and size",
    lead: "The several marks that look like “equals” do different jobs. One claims two things are the same. One introduces a name. One says “close enough for this sentence.” Mixing them up changes the claim.",
    items: [
      {
        id: "equals",
        tex: "=\\quad \\neq",
        speak: "Equals, and not equal",
        note: "An equation is a sentence, true or false once the names are filled in. Some equations are identities, true for every allowed value. Some are conditions that select the solutions. Simplifying an expression is not the same job as solving an equation.",
      },
      {
        id: "define",
        tex: ":=",
        speak: "Defined to be",
        note: "The colon on the side of the thing being named says “we hereby call this.” It is an assignment of a name, not a fact you discovered. Some authors write ≜ or “let … =”. You do not solve a definition.",
      },
      {
        id: "approx",
        tex: "\\approx",
        speak: "Approximately",
        note: "Close, in a sense the surrounding text should specify. It is not equality. You cannot cancel or substitute through an approximation as if it were = without tracking the error.",
      },
      {
        id: "order",
        tex: "<\\quad \\le\\quad >\\quad \\ge",
        speak: "Less, greater",
        note: "≤ is “less than or equal.” Adding the same number to both sides keeps the direction. Multiplying by a negative number reverses it. A strict inequality < excludes equality.",
      },
      {
        id: "infinity",
        tex: "\\infty",
        speak: "Infinity",
        note: "A direction of unending growth, not a real number. n → ∞ means n eventually exceeds every fixed bound. ∞ − ∞ and 1/0 are not numbers. “The limit is infinity” describes how a limit fails to be real.",
      },
      {
        id: "plusminus",
        tex: "\\pm",
        speak: "Plus or minus",
        note: "Both signs. The quadratic formula’s ± produces two roots, not two ways to write one root. In an approximation, ±ε sometimes means “the error is at most ε in either direction.” The sentence says which.",
      },
      {
        id: "sup",
        tex: "\\sup A\\quad \\inf A",
        speak: "Supremum and infimum",
        note: "sup A is the least upper bound of A, the lowest ceiling, which may sit just outside A. inf A is the greatest lower bound. max and min require the bound to be attained inside the set. The real analysis shelf is where this gets precise.",
      },
    ],
  },
  {
    id: "arithmetic",
    title: "Powers, sums, and products",
    lead: "These are abbreviations for arithmetic you could write in a longer line. Expand a small case until the abbreviation becomes boring. That is how you check that you read it correctly.",
    items: [
      {
        id: "power",
        tex: "a^n\\quad a_n",
        speak: "Up is a power, down is an index",
        note: "aⁿ is a to the n. aₙ is the n-th term of a list. They are not the same. a^{(n)} sometimes means the n-th derivative. The parentheses are the author’s way of saying “this is not a power.”",
      },
      {
        id: "root",
        tex: "\\sqrt{a}\\quad a^{1/2}",
        speak: "Square root",
        note: "√a is the nonnegative number whose square is a, for a ≥ 0. The equation x² = a has two solutions when a > 0. The symbol √a has one value. √(a²) = |a|, not a.",
      },
      {
        id: "factorial",
        tex: "n!",
        speak: "Factorial",
        note: "n! = 1·2·…·n for a positive integer n, and 0! = 1 by convention, so that empty products and binomial coefficients stay consistent. Factorial grows faster than any fixed power of n.",
      },
      {
        id: "sum",
        tex: "\\sum_{i=1}^{n} a_i",
        speak: "Sum",
        note: "a₁ + a₂ + … + aₙ. The index i is a counter. It is not an unknown to solve for, and changing its name does not change the sum. The ends of the sum are part of the notation: from where, to where.",
      },
      {
        id: "prod",
        tex: "\\prod_{i=1}^{n} a_i",
        speak: "Product",
        note: "a₁ · a₂ · … · aₙ. The same dummy-index habit as the sum. An empty product, with no factors, is taken to be 1, just as an empty sum is 0.",
      },
      {
        id: "binom",
        tex: "\\binom{n}{k}",
        speak: "Binomial coefficient",
        note: "The number of ways to choose k elements from n, when order does not matter. It equals n! / (k! (n − k)!) for integers 0 ≤ k ≤ n. People say “n choose k.”",
      },
      {
        id: "fraction",
        tex: "\\frac{a+b}{c}",
        speak: "The bar groups",
        note: "The fraction bar is a grouping symbol and a division. (a + b)/c is not a + b/c. The bar is longer than the things it covers, and that length is the parentheses. Nested fractions are still one object.",
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    lead: "A function assigns one output to each allowed input. The notation has to say three things: the name of the rule, the input, and, when it matters, the sets the input and output live in.",
    items: [
      {
        id: "call",
        tex: "f(x)",
        speak: "f of x",
        note: "The value of the function f at the input x. Parentheses here are the function call, not multiplication, once f has been named as a function. f(a + b) is the function applied to the sum. It is not automatically f(a) + f(b).",
      },
      {
        id: "arrow-set",
        tex: "f:A\\to B",
        speak: "f from A to B",
        note: "A is the domain, the set of inputs. B is the codomain, the set the outputs are declared to land in. The image, the set of outputs that actually happen, may be smaller than B. The arrow between sets is this declaration.",
      },
      {
        id: "mapsto",
        tex: "x\\mapsto x^2",
        speak: "Maps to",
        note: "The barred arrow names the rule without giving it a letter: x is sent to x². The ordinary arrow → is the one between sets. The barred arrow ↦ is the one between an input and its output.",
      },
      {
        id: "compose",
        tex: "f\\circ g",
        speak: "f after g",
        note: "(f ∘ g)(x) = f(g(x)). The right-hand function runs first. The circle is not multiplication. f ∘ g and g ∘ f are different rules in general.",
      },
      {
        id: "inverse",
        tex: "f^{-1}",
        speak: "Inverse function, usually",
        note: "On most shelves f⁻¹ means the inverse function, the rule that sends each output back to its input. It does not mean 1/f. The reciprocal is 1/f(x), sometimes written (f(x))⁻¹. Trig is the famous collision: sin⁻¹ is arcsin, while (sin x)⁻¹ = 1/sin x.",
      },
      {
        id: "sin-square",
        tex: "\\sin^2 x",
        speak: "Sine, squared",
        note: "sin²x means (sin x)², the square of the value. It does not mean sin(sin x), and it does not mean sin(x²). The same pattern is used for cos², log², and sometimes f², though f² can also mean f ∘ f. If both readings are plausible, the author owes you a sentence.",
      },
      {
        id: "log",
        tex: "\\log\\quad \\ln",
        speak: "Logarithm",
        note: "ln is the natural log, base e. log is not stable: school books often mean base 10, computing often means base 2, and analysis often means base e. The input must be positive. log(xy) = log x + log y. log(x + y) does not split.",
      },
      {
        id: "juxtapose",
        plain: "2x, sin x",
        speak: "Letters side by side",
        note: "2x means 2 times x. sin x means the sine of x, not s · i · n · x. A named function sitting against its input is a call, even when the parentheses are omitted. A number or a parenthesized product beside a letter is multiplication.",
      },
    ],
  },
  {
    id: "calculus",
    title: "Calculus marks",
    lead: "These name a limit, a rate, or an accumulated sum. Each one hides a limiting process. The short mark is safe to compute with only after its theorem has told you the hypotheses.",
    items: [
      {
        id: "lim",
        tex: "\\lim_{x\\to a}f(x)",
        speak: "Limit as x approaches a",
        note: "What the outputs approach as the inputs approach a, not the value f(a) itself. One-sided versions write x → a⁺ or x → a⁻. The variable after “lim” is the one that is moving.",
      },
      {
        id: "prime",
        tex: "f'(a)\\quad f''(a)",
        speak: "f prime, f double prime",
        note: "f′(a) is the derivative at a, the slope of the tangent, the instantaneous rate. f″ is the derivative of f′. Primes are not powers. y′ means the derivative of y with respect to whatever variable the context named.",
      },
      {
        id: "ddx",
        tex: "\\dfrac{d}{dx}\\quad \\dfrac{dy}{dx}",
        speak: "d by d x",
        note: "An operator telling you to differentiate with respect to x. dy/dx is the derivative of y with respect to x. The d’s are not numbers you cancel, even though the chain rule is written as if they were fractions. That fiction is useful and is not a definition.",
      },
      {
        id: "partial",
        tex: "\\partial",
        speak: "Partial",
        note: "∂f/∂x differentiates with respect to x while holding the other independent variables fixed. It is the derivative of a function of several variables along one coordinate. The straight d is for a function of one variable.",
      },
      {
        id: "integral",
        tex: "\\int_a^b f(x)\\,dx",
        speak: "Integral from a to b",
        note: "The signed area under f from a to b, when the integral exists. Area below the axis counts negative. The x in dx is a dummy: renaming it to t does not change the value. The limits a and b are part of the question. Without them, ∫ f(x) dx asks for the family of antiderivatives.",
      },
      {
        id: "floor",
        tex: "\\lfloor x\\rfloor\\quad \\lceil x\\rceil",
        speak: "Floor and ceiling",
        note: "Floor of x is the greatest integer less than or equal to x. Ceiling is the least integer greater than or equal to x. ⌊−1.2⌋ = −2, not −1. The floor steps down, away from zero, on the negatives.",
      },
    ],
  },
  {
    id: "habits",
    title: "Habits that trip people",
    lead: "Most mistakes at the start are reading mistakes. The algebra was never given a chance. These are the habits worth practicing until they are dull.",
    items: [
      {
        id: "dummy",
        plain: "rename the index",
        speak: "Dummy names",
        note: "In a sum, an integral, or a “for every x” that binds x, the letter is private to that phrase. You may rename it, provided you rename every use inside the phrase and you do not collide with a letter already in use outside. ∫ f(x) dx and ∫ f(t) dt are the same number.",
      },
      {
        id: "cancel",
        plain: "cancel a factor",
        speak: "Cancel only nonzero factors",
        note: "Canceling is dividing. Dividing by an expression that might be zero either is illegal or throws away a case. Write the excluded inputs down, then cancel, then decide whether those inputs were solutions of the original sentence.",
      },
      {
        id: "parens",
        plain: "( )  [ ]  { }",
        speak: "Three shapes of bracket",
        note: "Parentheses group, and they write open intervals and points. Square brackets group when parentheses are already in use, and they write closed intervals. Braces write sets. The shape is meaningful. [0, 1] is not the set {0, 1}.",
      },
      {
        id: "degree",
        plain: "degrees or radians",
        speak: "The silent unit",
        note: "sin(90) in a calculus line means the sine of 90 radians, many turns, not a right angle, unless the problem said degrees. Derivative rules for sine and cosine assume radians. A calculator left in degree mode will confirm the wrong reading.",
      },
      {
        id: "context",
        plain: "one mark, one job here",
        speak: "Context chooses",
        note: "The bar, the superscript −1, the word log, the symbol ⊂, and the letter i all have more than one standard meaning. A good text uses one meaning per sentence and relies on the nouns around the mark. If a line is ambiguous, it is not yet a mathematical sentence.",
      },
    ],
  },
];
