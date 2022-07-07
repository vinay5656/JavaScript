let candidate1 = {
  fullName: "Ravi Singh",
  weight: 56,
  height: 1.56,

  calcBMI: function () {
    //  let bmi = this.weight/(this.height*this.height);
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
let candidate2 = {
  fullName: "Vinay Singh",
  weight: 74,
  height: 1.52,

  calcBMI: function () {
    //let bmi = this.weight/(this.height*this.height);
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
if (candidate1.calcBMI() > candidate2.calcBMI()) {
  console.log(
    candidate1.fullName,
    "(",
    candidate1.calcBMI(),
    ") has higher BMI then ",
    candidate2.fullName,
    "(",
    candidate2.calcBMI(),
    ")"
  );
} else {
  console.log(
    candidate2.fullName,
    "(",
    candidate2.calcBMI(),
    ") has higher BMI then ",
    candidate1.fullName,
    "(",
    candidate1.calcBMI(),
    ")"
  );
}
console.log(candidate1, candidate2);
