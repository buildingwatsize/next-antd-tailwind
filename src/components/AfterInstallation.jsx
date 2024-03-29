const AfterInstallation = () => {
  return (
    <div
      data-testid="after-installation-container"
      className="w-full bg-gradient-to-l from-[#fff] to-[#FFBE98] p-1.5"
    >
      <div className="bg-base-100 relative p-8">
        <sup className="absolute top-10 right-6 flex items-center gap-2 font-bold">
          <div className="h-2 w-2 bg-[#FFBE98]" />
          Pantone color of the year 2023 - Viva Magenta
        </sup>
        <div className="bg-gradient-to-l from-[#964F4C] to-[#964F4C] bg-clip-text text-h3 font-bold text-transparent">
          After Installation
        </div>
        <div className="py-2">
          <strong>
            You have to edit text by name below this{" "}
            <span className="text-[#964F4C]">
              {'(Trick: use "Find All and Replace")'}
            </span>
          </strong>
          <ul className="list-[upper-roman] pl-8 pt-4">
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_PROJECT_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_GROUP_NAME</li>
            <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
          </ul>
        </div>
        <div className="pt-4 text-small leading-tight text-[#964F4C]">
          Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like
          {'"sub.host.com:9000" or "172.1.2.3:9000"'}
        </div>
        <sup className="opacity-10">
          จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
        </sup>
      </div>
    </div>
  );
};

export default AfterInstallation;
