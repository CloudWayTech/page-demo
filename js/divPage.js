function setDivPage(setDivName,allPageNum){
	if(allPageNum>1){
		$("#"+setDivName).show();
		$("#"+setDivName).find(".allPageNum").attr("pageNum",allPageNum);
		$("#"+setDivName).find(".allPageNum").html("共"+allPageNum+"页");
		$("#"+setDivName).find(".pvBtn").hide();
		$("#"+setDivName).find(".pvBtn").attr("onclick","pvPage($(this));"+$("#"+setDivName).attr("coToBo")+";");
		$("#"+setDivName).find(".jpBtn").attr("onclick","jumpPage($(this));"+$("#"+setDivName).attr("coToBo")+";");
		$("#"+setDivName).find(".nxBtn").attr("onclick","nxPage($(this));"+$("#"+setDivName).attr("coToBo")+";");
	}
	
}
function pvPage(pThis){
	if(pThis.closest(".divCol").find(".pageNum").val()>1){
		pThis.closest(".divCol").find(".pageNum").val(pThis.closest(".divCol").find(".pageNum").val() - 1)
	}
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) == 1){
		pThis.hide();
	}
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) != parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
		pThis.closest(".divCol").find(".nxBtn").show();
	}
}
function nxPage(pThis){
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) < parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
		pThis.closest(".divCol").find(".pageNum").val(parseInt(pThis.closest(".divCol").find(".pageNum").val()) + 1)
	}
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) == parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
		pThis.hide();
	}
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) != 1){
		pThis.closest(".divCol").find(".pvBtn").show();
	}
}
function jumpPage(pThis){
	if(parseInt(pThis.closest(".divCol").find(".pageNum").val())<=parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum")) && parseInt(pThis.closest(".divCol").find(".pageNum").val())>=1){
		if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) == 1){
			pThis.closest(".divCol").find(".pvBtn").hide();
			}else{
				pThis.closest(".divCol").find(".pvBtn").show();
			}
			if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) != parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
				pThis.closest(".divCol").find(".nxBtn").show();
			}else{
				pThis.closest(".divCol").find(".nxBtn").hide();
			}
	}else if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) > parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
		pThis.closest(".divCol").find(".pageNum").val(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"));
		pThis.closest(".divCol").find(".nxBtn").hide();
		if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) != 1){
			pThis.closest(".divCol").find(".pvBtn").show();
		}
	}else if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) <1){
		pThis.closest(".divCol").find(".pageNum").val("1");
		pThis.closest(".divCol").find(".pvBtn").hide();
		if(parseInt(pThis.closest(".divCol").find(".pageNum").val()) != parseInt(pThis.closest(".divCol").find(".allPageNum").attr("pageNum"))){
			pThis.closest(".divCol").find(".nxBtn").show();
		}
	}
	
}
