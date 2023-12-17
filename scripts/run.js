const main = async () => {
  try {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    await waveContract.getTotalWaves();

    const firstWaveTxn = await waveContract.wave();
    await firstWaveTxn.wait();

    await waveContract.getTotalWaves();

    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait();

    await waveContract.getTotalWaves();

    // Get individual wave counts
    const ownerWaveCount = await waveContract.getWaveCount(owner.address);
    const randomPersonWaveCount = await waveContract.getWaveCount(randomPerson.address);

    console.log(`Wave count for owner: ${ownerWaveCount}`);
    console.log(`Wave count for randomPerson: ${randomPersonWaveCount}`);

  } catch (error) {
    console.error("Error:", error);
  }
};

const runMain = async () => {
  await main();
  process.exit(0);
};

runMain();
