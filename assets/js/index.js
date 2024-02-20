
$(document).ready(function () {
    var currentSection = "#personalDetails";
    var isAnimating = false;

    function showSection(section) {
        if (!isAnimating && currentSection !== section) {
            isAnimating = true;
            $(currentSection).fadeOut(500, function () {
                $(section).fadeIn(500, function () {
                    $(this).css('display', 'block');
                    $(this).css('opacity', '1');
                    isAnimating = false;
                    currentSection = section;

                    
                    $("#first-link, #second-link, #third-link").removeClass("active");

                    
                    if (currentSection === "#familyBackground") {
                        $("#second-link").addClass("active");
                        $("#first-link").addClass("completed"); 
                    } else if (currentSection === "#educationBackground") {
                        $("#third-link").addClass("active");
                        $("#second-link").addClass("completed"); 
                    } else {
                        $("#first-link").addClass("active");
                       
                    }

                    if (currentSection === "#educationBackground") {
                        $("#lastFieldsetButtons .btn-next").hide();
                        $("#lastFieldsetButtons .btn-submit").show().prop("disabled", true);
                    } else {
                        $("#lastFieldsetButtons .btn-next").show();
                        $("#lastFieldsetButtons .btn-submit").hide().prop("disabled", false);
                    }
                });
            });
        }
    }

    $("#familyBackground, #educationBackground").hide();

    $("#first-link").addClass("active");

    $("#first-link").click(function () {
        if (validateFields(currentSection)) {
            showSection("#familyBackground");
        }
    });

    $("#second-link").click(function () {
        if (validateFields(currentSection)) {
            showSection("#educationBackground");
        }
    });

    $("#third-link").click(function () {
        if (validateFields(currentSection)) {
            showSection("#personalDetails");
        }
    });

    $(".btn-back").click(function () {
        var prevSection;
        if (currentSection === "#familyBackground") {
            prevSection = "#personalDetails";
        } else if (currentSection === "#educationBackground") {
            prevSection = "#familyBackground";
        } else {
            prevSection = "#personalDetails";
        }
        showSection(prevSection);
    });

    $(".btn-next, .btn-submit").click(function () {
        var isValid = validateFields(currentSection);
        if (isValid) {
            var nextSection;
            if (currentSection === "#personalDetails") {
                nextSection = "#familyBackground";
            } else if (currentSection === "#familyBackground") {
                nextSection = "#educationBackground";
            } else {
                nextSection = "#personalDetails";
            }
            showSection(nextSection);
        }
    });

    function validateFields(section) {
        var isValid = true;

        if (section === "#personalDetails") {
            isValid = validatePersonalDetails();
        } else if (section === "#familyBackground") {
            isValid = validateFamilyBackground();
        } else if (section === "#educationBackground") {
            isValid = validateEducationBackground();
        }

        return isValid;
    }
    $(document).ready(function () {
        var currentSection = "#personalDetails";
        var isAnimating = false;
    
        function showSection(section) {
            if (!isAnimating && currentSection !== section) {
                isAnimating = true;
                $(currentSection).fadeOut(500, function () {
                    $(section).fadeIn(500, function () {
                        $(this).css('display', 'block');
                        $(this).css('opacity', '1');
                        isAnimating = false;
                        currentSection = section;
    
                        if (currentSection === "#educationBackground") {
                            $("#lastFieldsetButtons .btn-next").hide();
                            $("#lastFieldsetButtons .btn-submit").show().prop("disabled", true);
                            $("#third-link").addClass("active");
                        } else {
                            $("#lastFieldsetButtons .btn-next").show();
                            $("#lastFieldsetButtons .btn-submit").hide().prop("disabled", false);
                        }
                    });
                });
            }
        }
    
        $("#familyBackground, #educationBackground").hide();
        $("#first-link").addClass("active"); 
        $("#first-link").click(function () {
            if (validateFields(currentSection)) {
                showSection("#familyBackground");
                $("#second-link").addClass("active"); 
            }
        });
    
        $("#second-link").click(function () {
            if (validateFields(currentSection)) {
                showSection("#educationBackground");
                $("#third-link").addClass("active"); 
            }
        });
    
        $("#third-link").click(function () {
            if (validateFields(currentSection)) {
                showSection("#personalDetails");
                $("#first-link").addClass("active"); 
            }
        });
    
        $(".btn-back").click(function () {
            var prevSection;
            if (currentSection === "#familyBackground") {
                prevSection = "#personalDetails";
            } else if (currentSection === "#educationBackground") {
                prevSection = "#familyBackground";
            } else {
                prevSection = "#personalDetails";
            }
            showSection(prevSection);
        });
    
        $(".btn-next, .btn-submit").click(function () {
            var isValid = validateFields(currentSection);
            if (isValid) {
                var nextSection;
                if (currentSection === "#personalDetails") {
                    nextSection = "#familyBackground";
                } else if (currentSection === "#familyBackground") {
                    nextSection = "#educationBackground";
                } else {
                    nextSection = "#personalDetails";
                }
                showSection(nextSection);
            }
        });
    
        function validateFields(section) {
            var isValid = true;
    
            if (section === "#personalDetails") {
                isValid = validatePersonalDetails();
            } else if (section === "#familyBackground") {
                isValid = validateFamilyBackground();
            } else if (section === "#educationBackground") {
                isValid = validateEducationBackground();
            }
    
            return isValid;
        }
        
    });
    

// Personal Details
    function validatePersonalDetails() {
        var isValid = true;
        $(".error, .success").removeClass("error success").css("color", "");
        $(".error-message").hide().text(""); 

        
        function markAsError(inputElement) {
            inputElement.addClass("error");
            var labelFor = inputElement.attr("id");
            $("label[for='" + labelFor + "']").addClass("error-label");
        }

       
        function markAsSuccess(inputElement) {
            inputElement.addClass("success-label").css("border", "2px solid green");
            var labelFor = inputElement.attr("id");
            $("label[for='" + labelFor + "']").addClass("success").css("color", "green");
        }

        
        var permanentAddressValue = $("#permanentAddress").val().trim();
        var permanentAddressInput = $("#permanentAddress");
        if (permanentAddressValue === "") {
            isValid = false;
            markAsError(permanentAddressInput);
            $("span.error-message[data-error-for='permanentAddress']").text("(*Please fill in this field*)").show();
        } else {
            markAsSuccess(permanentAddressInput);
            $("span.error-message[data-error-for='permanentAddress']").hide().text("");
        }
   

       
        var placeofBirthValue = $("#placeofBirth").val().trim();
        var placeofBirthInput = $("#placeofBirth");
        if (placeofBirthValue === "" || !/^[a-zA-Z\s]+$/.test(placeofBirthValue)) {
            isValid = false;
            markAsError(placeofBirthInput);
            $("span.error-message[data-error-for='placeofBirth']").text("(*Please enter only letters*)").show();
        } else {
            markAsSuccess(placeofBirthInput);
            $("span.error-message[data-error-for='placeofBirth']").hide().text("");
        }

      
        var contactValue = $("#contact").val().trim();
        var contactInput = $("#contact");
        var contactError = $("#contactError");

        if (contactValue === "" || isNaN(contactValue)) {
            isValid = false;
            markAsError(contactInput);
            contactError.text("(*Please input a number*)").addClass("error-message").show();
        } else {
            markAsSuccess(contactInput);
            contactError.hide().text(""); 
        }

        
        var yearLevelValue = $("#yearLevel").val().trim();
        var yearLevelInput = $("#yearLevel");
        if (yearLevelValue === "" || !/^[a-zA-Z\s]+$/.test(yearLevelValue)) {
            isValid = false;
            markAsError(yearLevelInput);
            $("span.error-message[data-error-for='yearLevel']").text("(*Please enter only letters*)").show();
        } else {
            markAsSuccess(yearLevelInput);
            $("span.error-message[data-error-for='yearLevel']").hide().text("");
        }

        

        return isValid;
    }
    $("#contact").on("input", function () {
        validatePersonalDetails();
    });

    $("#placeofBirth, #permanentAddress, #yearLevel").on("input", function () {
        validatePersonalDetails();
    });
    
 $("<span id='contactError' class='error-message' data-error-for='contact'></span>").insertBefore("#contact");
 $("<span class='error-message' data-error-for='permanentAddress'></span>").insertBefore("#permanentAddress");
 $("<span class='error-message' data-error-for='placeofBirth'></span>").insertBefore("#placeofBirth");
 $("<span class='error-message' data-error-for='yearLevel'></span>").insertBefore("#yearLevel");






// Family Background
 function validateFamilyBackground(){
    var isValid = true;

 
         $(".error, .success").removeClass("error success").css("color", "");
         $(".error-message").hide().text(""); 
 
        
         function markAsError(inputElement) {
             inputElement.addClass("error");
             var labelFor = inputElement.attr("id");
             $("label[for='" + labelFor + "']").addClass("error-label");
         }
 
         
         function markAsSuccess(inputElement) {
            inputElement.addClass("success-label").css("border", "2px solid green");
            var labelFor = inputElement.attr("id");
            $("label[for='" + labelFor + "']").addClass("success").css("color", "green");
        }

        var fatherValue = $("#fname").val().trim();
        var fatherInput = $("#fname");
        if (fatherValue === "" || !/^[a-zA-Z\s]+$/.test(fatherValue)) {
            isValid = false;
            markAsError(fatherInput);
            $("span.error-message[data-error-for='fname']").text("(*Please enter only letters*)").show();
        } else {
            markAsSuccess(fatherInput);
            $("span.error-message[data-error-for='fname']").hide().text("");
        }

        
         var fatherworkValue = $("#father-work").val().trim();
         var fatherworkInput = $("#father-work");
         if (fatherworkValue === "" || !/^[a-zA-Z\s]+$/.test(fatherworkValue)) {
             isValid = false;
             markAsError(fatherworkInput);
             $("span.error-message[data-error-for='father-work']").text("(*Please enter only letters*)").show();
         } else {
             markAsSuccess(fatherworkInput);
             $("span.error-message[data-error-for='father-work']").hide().text("");
         }

 
        var motherValue = $("#mname").val().trim();
        var motherInput = $("#mname");
        if (motherValue === "" || !/^[a-zA-Z\s]+$/.test(motherValue)) {
            isValid = false;
            markAsError(motherInput);
            $("span.error-message[data-error-for='mname']").text("(*Please enter only letters*)").show();
        } else {
            markAsSuccess(motherInput);
            $("span.error-message[data-error-for='mname']").hide().text("");
        }


         var motherworkValue = $("#mother-work").val().trim();
         var motherworkInput = $("#mother-work");
         if (motherworkValue === "" || !/^[a-zA-Z\s]+$/.test(motherworkValue)) {
             isValid = false;
             markAsError(motherworkInput);
             $("span.error-message[data-error-for='mother-work']").text("(*Please enter only letters*)").show();
         } else {
             markAsSuccess(motherworkInput);
             $("span.error-message[data-error-for='mother-work']").hide().text("");
         }


             var parentscontactValue = $("#parentsContact").val().trim();
             var parentscontactInput = $("#parentsContact");
             var parentcontactError = $("#parentcontactError");
     
             if (parentscontactValue === "" || isNaN(parentscontactValue)) {
                 isValid = false;
                 markAsError(parentscontactInput);
                 parentcontactError.text("(*Please input a number*)").addClass("error-message").show();
             } else {
                 markAsSuccess(parentscontactInput);
                 parentcontactError.hide().text(""); 
             }
            

            var parentsAddressValue = $("#parentsAddress").val().trim();
            var parentsAddressInput = $("#parentsAddress");
            if (parentsAddressValue === "") {
                isValid = false;
                markAsError(parentsAddressInput);
                $("span.error-message[data-error-for='parentsAddress']").text("(*Please fill in this field*)").show();
            } else {
                markAsSuccess(parentsAddressInput);
                $("span.error-message[data-error-for='parentsAddress']").hide().text("");
            }

            var brothersValue = $("#numberofBrothers").val().trim();
            var brothersInput = $("#numberofBrothers");
            var brothersError = $("#brothersError");
    
            if (brothersValue === "" || isNaN(brothersValue)) {
                isValid = false;
                markAsError(brothersInput);
                brothersError.text("(*Please input a number*)").addClass("error-message").show();
            } else {
                markAsSuccess(brothersInput);
                brothersError.hide().text(""); 
            }

            var sistersValue = $("#numberofSisters").val().trim();
            var sistersInput = $("#numberofSisters");
            var sistersError = $("#sistersError");

            if (sistersValue === "" || isNaN(sistersValue)) {
                isValid = false;
                markAsError(sistersInput);
                sistersError.text("(*Please input a number*)").addClass("error-message").show();
            } else {
                markAsSuccess(sistersInput);
                sistersError.hide().text(""); 
            }


            var AddressValue = $("#addressNotliving").val().trim();
            var AddressInput = $("#addressNotliving");
            if (AddressValue === "") {
                isValid = false;
                markAsError(AddressInput);
                $("span.error-message[data-error-for='addressNotliving']").text("(*Please fill in this field*)").show();
            } else {
                markAsSuccess(AddressInput);
                $("span.error-message[data-error-for='addressNotliving']").hide().text("");
            }

            var guardianValue = $("#guardian").val().trim();
            var guardianInput = $("#guardian");
            if (guardianValue === "" || !/^[a-zA-Z\s]+$/.test(guardianValue)) {
                isValid = false;
                markAsError(guardianInput);
                $("span.error-message[data-error-for='guardian']").text("(*Please enter only letters*)").show();
            } else {
                markAsSuccess(guardianInput);
                $("span.error-message[data-error-for='guardian']").hide().text("");
            }

            var guardianRelationValue = $("#Relationguardian").val().trim();
            var guardianRelationInput = $("#Relationguardian");
            if (guardianRelationValue === "" || !/^[a-zA-Z\s]+$/.test(guardianRelationValue)) {
                isValid = false;
                markAsError(guardianRelationInput);
                $("span.error-message[data-error-for='Relationguardian']").text("(*Please enter only letters*)").show();
            } else {
                markAsSuccess(guardianRelationInput);
                $("span.error-message[data-error-for='Relationguardian']").hide().text("");
            }

            var guardiancontactValue = $("#guardianContact").val().trim();
            var guardiancontactInput = $("#guardianContact");
            var guardiancontactError = $("#guardiancontactError");

            if (guardiancontactValue === "" || isNaN(guardiancontactValue)) {
                isValid = false;
                markAsError(guardiancontactInput);
                guardiancontactError.text("(*Please input a number*)").addClass("error-message").show();
            } else {
                markAsSuccess(guardiancontactInput);
                guardiancontactError.hide().text("");
            } 
            

        var guardianAddressValue = $("#guardianAddress").val().trim();
        var guardianAddressInput = $("#guardianAddress");
        if (guardianAddressValue === "") {
            isValid = false;
            markAsError(guardianAddressInput);
            $("span.error-message[data-error-for='guardianAddress']").text("(*Please fill in this field*)").show();
        } else {
            markAsSuccess(guardianAddressInput);
            $("span.error-message[data-error-for='guardianAddress']").hide().text("");
        }
        return isValid;
}
    

   $("#parentsContact, #numberofBrothers, #numberofSisters, #guardianContact").on("input", function () {
    validateFamilyBackground();
    });


    $("#fname, #father-work, #mname, #mother-work, #parentsAddress, #addressNotliving, #guardian, #Relationguardian, #guardianAddress").on("input", function () {
        validateFamilyBackground();
    });

$("<span class='error-message' data-error-for='fname'></span>").insertBefore("#fname");
$("<span class='error-message' data-error-for='father-work'></span>").insertBefore("#father-work");
$("<span class='error-message' data-error-for='mname'></span>").insertBefore("#mname");
$("<span class='error-message' data-error-for='mother-work'></span>").insertBefore("#mother-work");
$("<span id= 'parentcontactError' class='error-message' data-error-for='parentsContact'></span>").insertBefore("#parentsContact");
$("<span class='error-message' data-error-for='parentsAddress'></span>").insertBefore("#parentsAddress");
$("<span id = 'brothersError'class='error-message' data-error-for='numberofBrothers'></span>").insertBefore("#numberofBrothers");
$("<span id = 'sistersError' class='error-message' data-error-for='numberofSisters'></span>").insertBefore("#numberofSisters");
$("<span class='error-message' data-error-for='addressNotliving'></span>").insertBefore("#addressNotliving");
$("<span class='error-message' data-error-for='guardian'></span>").insertBefore("#guardian");
$("<span class='error-message' data-error-for='Relationguardian'></span>").insertBefore("#Relationguardian");
$("<span id = 'guardiancontactError' class='error-message' data-error-for='guardianContact'></span>").insertBefore("#guardianContact");
$("<span class='error-message' data-error-for='guardianAddress'></span>").insertBefore("#guardianAddress");









// Education Field


 $("#elementarySchool, #elemaddressSchool, #elemyearGrad, #juniorSchool, #jhsschoolAddress, #junioryearGrad, #seniorSchool, #seniorschoolAddress, #senioryearGrad, #collegeSchool, #collegeschoolAddress, #collegeyearGrad").on("input", function () {
    validateEducationBackground();
});


$("#elementarySchool, #elemaddressSchool, #juniorSchool, #jhsschoolAddress, #seniorSchool, #seniorschoolAddress, #collegeSchool, #collegeschoolAddress").on("input", function () {
    validateEducationBackground();
});

$("<span class='error-message' data-error-for='elementarySchool'></span>").insertBefore("#elementarySchool");
$("<span class='error-message' data-error-for='elemaddressSchool'></span>").insertBefore("#elemaddressSchool");
$("<span id= 'elemGradError' class='error-message' data-error-for='elemyearGrad'></span>").insertBefore("#elemyearGrad");
$("<span class='error-message' data-error-for='juniorSchool'></span>").insertBefore("#juniorSchool");
$("<span class='error-message' data-error-for='jhsschoolAddress'></span>").insertBefore("#jhsschoolAddress");
$("<span id = 'juniorGradError' class='error-message' data-error-for='junioryearGrad'></span>").insertBefore("#junioryearGrad");
$("<span class='error-message' data-error-for='seniorSchool'></span>").insertBefore("#seniorSchool");
$("<span class='error-message' data-error-for='seniorschoolAddress'></span>").insertBefore("#seniorschoolAddress");
$("<span id = 'seniorGradError' class='error-message' data-error-for='senioryearGrad'></span>").insertBefore("#senioryearGrad");
$("<span class='error-message' data-error-for='collegeSchool'></span>").insertBefore("#collegeSchool");
$("<span class='error-message' data-error-for='collegeschoolAddress'></span>").insertBefore("#collegeschoolAddress");
$("<span class='error-message' data-error-for='collegeyearGrad'></span>").insertBefore("#collegeyearGrad");

function validateEducationBackground() {

    var isValid = true;


    $(".error, .success").removeClass("error success").css("color", "");
    $(".error-message").hide().text(""); 

   
    function markAsError(inputElement) {
        inputElement.addClass("error");
        var labelFor = inputElement.attr("id");
        $("label[for='" + labelFor + "']").addClass("error-label");
    }

    
      
      function markAsSuccess(inputElement) {
        inputElement.addClass("success-label").css("border", "2px solid green");
        var labelFor = inputElement.attr("id");
        $("label[for='" + labelFor + "']").addClass("success").css("color", "green");
    }

    var elementarySchoolValue = $("#elementarySchool").val().trim();
    var elementarySchoolInput = $("#elementarySchool");
    if (elementarySchoolValue === "" || !/^[a-zA-Z\s]+$/.test(elementarySchoolValue)) {
        isValid = false;
        markAsError(elementarySchoolInput);
        $("span.error-message[data-error-for='elementarySchool']").text("(*Please enter only letters*)").show();
    } else {
        markAsSuccess(elementarySchoolInput);
        $("span.error-message[data-error-for='elementarySchool']").hide().text("");
    }

    
    var elemsaddressvalue = $("#elemaddressSchool").val().trim();
    var elemaddressInput = $("#elemaddressSchool");
    if (elemsaddressvalue === "" || !/^[a-zA-Z\s]+$/.test(elemsaddressvalue)) {
        isValid = false;
        markAsError(elemaddressInput);
        $("span.error-message[data-error-for='elemaddressSchool']").text("(*Please enter only letters*)").show();
    } else {
        markAsSuccess(elemaddressInput);
        $("span.error-message[data-error-for='elemaddressSchool']").hide().text("");
    }

    
    var elemGradValue = $("#elemyearGrad").val().trim();
    var elemGradInput = $("#elemyearGrad");
    var elemGradError = $("#elemGradError");

    if (elemGradValue === "" || isNaN(elemGradValue)) {
        isValid = false;
        markAsError(elemGradInput);
        elemGradError.text("(*Please input a number*)").addClass("error-message").show();
    } else {
        markAsSuccess(elemGradInput);
        elemGradError.hide().text(""); 
    }


   var juniorSchoolValue = $("#juniorSchool").val().trim();
   var juniorSchoolInput = $("#juniorSchool");
   if (juniorSchoolValue === "" || !/^[a-zA-Z\s]+$/.test(juniorSchoolValue)) {
       isValid = false;
       markAsError(juniorSchoolInput);
       $("span.error-message[data-error-for='juniorSchool']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(juniorSchoolInput);
       $("span.error-message[data-error-for='juniorSchool']").hide().text("");
   }


   var junioraddressvalue = $("#jhsschoolAddress").val().trim();
   var junioradressInput = $("#jhsschoolAddress");
   if (junioraddressvalue === "" || !/^[a-zA-Z\s]+$/.test(junioraddressvalue)) {
       isValid = false;
       markAsError(junioradressInput);
       $("span.error-message[data-error-for='jhsschoolAddress']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(junioradressInput);
       $("span.error-message[data-error-for='jhsschoolAddress']").hide().text("");
   }


   var juniorradValue = $("#junioryearGrad").val().trim();
   var juniorGradInput = $("#junioryearGrad");
   var juniorGradError = $("#elemGradError");

   if (juniorradValue === "" || isNaN(juniorradValue)) {
       isValid = false;
       markAsError(juniorGradInput);
       juniorGradError.text("(*Please input a number*)").addClass("error-message").show();
   } else {
       markAsSuccess(juniorGradInput);
       juniorGradError.hide().text(""); 
   }


   var seniorSchoolValue = $("#seniorSchool").val().trim();
   var seniorSchoolInput = $("#seniorSchool");
   if (seniorSchoolValue === "" || !/^[a-zA-Z\s]+$/.test(seniorSchoolValue)) {
       isValid = false;
       markAsError(seniorSchoolInput);
       $("span.error-message[data-error-for='seniorSchool']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(seniorSchoolInput);
       $("span.error-message[data-error-for='seniorSchool']").hide().text("");
   }


   var senioraddressvalue = $("#seniorschoolAddress").val().trim();
   var senioradressInput = $("#seniorschoolAddress");
   if (senioraddressvalue === "" || !/^[a-zA-Z\s]+$/.test(senioraddressvalue)) {
       isValid = false;
       markAsError(senioradressInput);
       $("span.error-message[data-error-for='seniorschoolAddress']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(senioradressInput);
       $("span.error-message[data-error-for='seniorschoolAddress']").hide().text("");
   }


   var senioradValue = $("#senioryearGrad").val().trim();
   var seniorGradInput = $("#senioryearGrad");
   var seniorGradError = $("#elemGradError");

   if (senioradValue === "" || isNaN(senioradValue)) {
       isValid = false;
       markAsError(seniorGradInput);
       seniorGradError.text("(*Please input a number*)").addClass("error-message").show();
   } else {
       markAsSuccess(seniorGradInput);
       seniorGradError.hide().text(""); 
   }


   var collegeSchoolValue = $("#collegeSchool").val().trim();
   var collegeSchoolInput = $("#collegeSchool");
   if (collegeSchoolValue === "" || !/^[a-zA-Z\s]+$/.test(collegeSchoolValue)) {
       isValid = false;
       markAsError(collegeSchoolInput);
       $("span.error-message[data-error-for='collegeSchool']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(collegeSchoolInput);
       $("span.error-message[data-error-for='collegeSchool']").hide().text("");
   }


   var collegeaddressvalue = $("#collegeschoolAddress").val().trim();
   var collegeadressInput = $("#collegeschoolAddress");
   if (collegeaddressvalue === "" || !/^[a-zA-Z\s]+$/.test(collegeaddressvalue)) {
       isValid = false;
       markAsError(collegeadressInput);
       $("span.error-message[data-error-for='collegeschoolAddress']").text("(*Please enter only letters*)").show();
   } else {
       markAsSuccess(collegeadressInput);
       $("span.error-message[data-error-for='collegeschoolAddress']").hide().text("");
   }

if (isValid) {

    $("#lastFieldsetButtons .btn-submit").prop("disabled", false);
} else {

    $("#lastFieldsetButtons .btn-submit").prop("disabled", true);
}

    validateForm();
}
    if (window.innerWidth <= 768) {
        // Show the mobile buttons
        $("#lastFieldsetButtons").css("display", "inline-block");
    }
});

    
    
    
    
