/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name":"王锴",
	"role":"",
	"contacts":{
		"移动电话":"159-1171-0130",
		"电子邮箱":"kwang77@126.com",
		"github":"kaiwang77",
		"location":"云南"
	},
	"biopic":"images/fry.jpg",
	"welcomeMessage":"欢迎浏览王锴的简历!",
	"skills":["html5","css3","javascript","jQuery"]
};

var education = {
	"schools":[
		{
			"name":"上海交通大学",
			"location":"上海",
			"degree":"本科",
		    "dates":"九月,2008-六月,2012",
		    "url":"https://www.sjtu.edu.cn",
	    	"major":["应用化学"]
	    }
    ],
    "onlineCourses":[
    	{
	    	"title":"前端工程师纳米学位",
			"school":"Udacity",
			"dates":"十一月,2016-二月,2017",
			"url":"https://www.youdaxue.com"
    	}
	]
};

var work = {
	"jobs":[
		{
			"employer":"贵研铂业股份有限公司",
			"title":"产品开发",
	    	"location":"昆明",
	    	"dates":"七月,2012-十一月,2012",
	    	"description":["通过化学方法生产银粉并制作电子浆料","经过印刷、烧成等工序在基片上制作电路","对产品进行相关理化性质的测试","参与新型贵金属信息材料的研发"],
			"url":"http://www.sino-platinum.com.cn/"
		},
		{
			"employer":"新亚地产",
			"title":"销售顾问",
			"location":"昆明",
			"dates":"十一月,2012-一月,2013",
	    	"description":["负责公司房源的开发与积累，并与客户建立良好的业务合作关系","负责客户接待、咨询工作，为客户提供专业的房地产相关咨询服务"],
			"url":""
		}
	]
};

var projects = {
	"projects":[
		{
			"title":"Portfolio",
			"dates":"十二月,2016",
			"description":["创建了一个作品集网页，包含图片和简短的文本内容","使用bootstrap网格系统以获得良好的页面布局","为网页添加响应性以适应不同尺寸的窗口和设备","使用了bootstrap模态框"],
			"images":["images/1.png"],
			"url":"https://github.com/kaiwang77/portfolio"
		},
		{
			"title":"Classic Arcade Game Clone",
			"dates":"一月,2017",
			"description":["街机游戏克隆","使用JavaScript面向对象编程功能运行游戏对象","运用requestanimationframe设置画面时间间隔，使游戏运行流畅",""],
			"images":["images/2.png"],
			"url":"https://github.com/kaiwang77/arcade-game"
		},
		{
			"title":"Online Resume",
			"dates":"二月，2017",
			"description":["创建在线简历","通过JavaScript字符串操作和jQuery文档操作修改文本内容及向页面添加元素"],
			"images":[""],
			"url":"https://github.com/kaiwang77/resume"
		}
	]
};




bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$(formattedRole).insertAfter("#name");

	$.each(bio.contacts,function(key,value) {
		var formattedContact = HTMLcontactGeneric.replace("%contact%",key);
		formattedContact = formattedContact.replace("%data%",value);
		$("#topContacts,#footerContacts").append(formattedContact);
	});

	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$(formattedWelcomeMessage).insertAfter(".biopic");

	if (bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

bio.displayBio();



work.displayWork = function() {
	for(var i = 0 ; i < work.jobs.length ; i++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);

		$(".work-entry:last a").attr("href",work.jobs[i].url);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		$(".work-entry:last").append(HTMLworkDescription);
		for(var j = 0 ; j < work.jobs[i].description.length ; j++) {
			var formattedDescription = HTMLworkDescriptionItem.replace("%data%",work.jobs[i].description[j]);
			$(".workDescription:last").append(formattedDescription);
		};
	};
};

work.displayWork();



projects.displayProjects = function() {
	for(var i = 0 ; i < projects.projects.length ; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		$(".project-entry:last a").attr("href",projects.projects[i].url);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		
		$(".project-entry:last").append(HTMLprojectDescription);
		for(var j = 0 ; j < projects.projects[i].description.length ; j++) {
			var formattedDescription = HTMLprojectDescriptionItem.replace("%data%",projects.projects[i].description[j]);
			$(".proDescription:last").append(formattedDescription);
		}

		for(var j = 0 ;j < projects.projects[i].images.length ; j++) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

projects.displayProjects();



education.displaySchools = function() {
	for(var i = 0 ; i < education.schools.length ; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major.join());
		$(".education-entry:last").append(formattedSchoolMajor);

	}

		$("#education").append(HTMLonlineClasses);
	for(var j = 0 ; j < education.schools.length ; j++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

education.displaySchools();

$("#mapDiv").append(googleMap);