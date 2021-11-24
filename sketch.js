var backgroundImg;
var whiteBox, outline;
var noPoverty, noPovertyImg;
var zeroHunger, zeroHungerImg;
var goodHealth, goodHealthImg;
var qualityEducation, qualityEducationImg;
var genderEquality, genderEqualityImg;
var cleanWater, cleanWaterImg;
var energy, energyImg;
var economicGrowth, economicGrowthImg;
var infrastructure, infrastructureImg;
var reducedInequalities, reducedInequalitiesImg;
var sustainableCities, sustainableCitiesImg;
var consumption, consumptionImg;
var climateAction, climateActionImg;
var lifeBelowWater, lifeBelowWaterImg;
var lifeOnLand, lifeOnLandImg;
var peace, peaceImg;
var partnerships, partnershipsImg;
var instruction;

function preload() {
  backgroundImg = loadImage("assets/SDGs.jpg")
  noPovertyImg = loadImage("assets/NoPoverty.png")
  zeroHungerImg = loadImage("assets/ZeroHunger.png")
  goodHealthImg = loadImage("assets/GoodHealth.png")
  qualityEducationImg = loadImage("assets/QualityEducation.png")
  genderEqualityImg = loadImage("assets/GenderEquality.png")
  cleanWaterImg = loadImage("assets/CleanWater.png")
  energyImg = loadImage("assets/Energy.png")
  economicGrowthImg = loadImage("assets/EconomicGrowth.png")
  infrastructureImg = loadImage("assets/Infrastructure.png")
  reducedInequalitiesImg = loadImage("assets/ReducedInequalities.png")
  sustainableCitiesImg = loadImage("assets/SustainableCities.png")
  consumptionImg = loadImage("assets/Consumption&Production.png")
  climateActionImg = loadImage("assets/ClimateAction.png")
  lifeBelowWaterImg = loadImage("assets/LifeBelowWater.png")
  lifeOnLandImg = loadImage("assets/LifeOnLand.png")
  peaceImg = loadImage("assets/Peace.png")
  partnershipsImg = loadImage("assets/Partnerships.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  outline = createSprite(980,305,560,560)
  outline.shapeColor = "black"

  whiteBox = createSprite(980,305,550,550)
  whiteBox.shapeColor = "white"

  noPoverty = createSprite(768, 85, 50, 50);
  noPoverty.addImage(noPovertyImg);
  noPoverty.scale = 0.4;

  zeroHunger = createSprite(875, 85, 50, 50);
  zeroHunger.addImage(zeroHungerImg);
  zeroHunger.scale = 0.4;

  goodHealth = createSprite(980, 85, 50, 50);
  goodHealth.addImage(goodHealthImg);
  goodHealth.scale = 0.4;

  qualityEducation = createSprite(1085, 85, 50, 50);
  qualityEducation.addImage(qualityEducationImg);
  qualityEducation.scale = 0.4;

  genderEquality = createSprite(1190, 85, 50, 50);
  genderEquality.addImage(genderEqualityImg);
  genderEquality.scale = 0.4;

  cleanWater = createSprite(768, 190, 50, 50);
  cleanWater.addImage(cleanWaterImg);
  cleanWater.scale = 0.4;

  energy = createSprite(875, 190, 50, 50);
  energy.addImage(energyImg);
  energy.scale = 0.4;

  economicGrowth = createSprite(980, 190, 50, 50);
  economicGrowth.addImage(economicGrowthImg);
  economicGrowth.scale = 0.4;

  infrastructure = createSprite(1085, 190, 50, 50);
  infrastructure.addImage(infrastructureImg);
  infrastructure.scale = 0.4;

  reducedInequalities = createSprite(1190, 190, 50, 50);
  reducedInequalities.addImage(reducedInequalitiesImg);
  reducedInequalities.scale = 0.4;

  sustainableCities = createSprite(768, 295, 50, 50);
  sustainableCities.addImage(sustainableCitiesImg);
  sustainableCities.scale = 0.4;

  consumption = createSprite(875, 295, 50, 50);
  consumption.addImage(consumptionImg);
  consumption.scale = 0.4;

  climateAction = createSprite(980, 295, 50, 50);
  climateAction.addImage(climateActionImg);
  climateAction.scale = 0.4;

  lifeBelowWater = createSprite(1085, 295, 50, 50);
  lifeBelowWater.addImage(lifeBelowWaterImg);
  lifeBelowWater.scale = 0.4;

  lifeOnLand = createSprite(1190, 295, 50, 50);
  lifeOnLand.addImage(lifeOnLandImg);
  lifeOnLand.scale = 0.4;

  peace = createSprite(768, 400, 50, 50);
  peace.addImage(peaceImg);
  peace.scale = 0.4;

  partnerships = createSprite(875, 400, 50, 50);
  partnerships.addImage(partnershipsImg);
  partnerships.scale = 0.4;  

  instruction = createSprite(979,513,500,100);
  instruction.shapeColor = "#1FCECB"

}

function draw() {
  background(backgroundImg);

  if(mousePressedOver(noPoverty)) {
    bg = createSprite(640, 304.5, windowWidth, windowHeight)
    bg.shapeColor = "#F08080"

    //noPovertyInfo()

  }

  drawSprites();

  textSize(20)
  fill("purple")
  text("Go ahead and click one of the above SDGs to read more about them :)", 752, 505, 505)
}

function noPovertyInfo() {
  swal(
    {
      title: `No Poverty`,
      text: "End poverty in all its forms everywhere.",
      imageUrl:
        "",
      imageSize: "150x150",
      confirmButtonText: "Done"
    })
}