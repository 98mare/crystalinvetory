import { GetDatewiseSampleStatusOfEachTest, GetListOfPatientDetailsBydateAndTestDone } from '../constants/url';
import { fetch } from '../utils/httpUtil';

export const careLabTabApi = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetReportCountByStatusAndDateRange?fromdate=${data.fromdate}&todate=${data.todate}`);
            if (response?.status === 200) {
                successCallback(response?.data?.ReportStatus)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const careLabSampleStatusApi = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetPatientSampleSummaryStatus?from=${data.fromdate}&to=${data.todate}&fiscalyearId=${data.fiscalyear}&testin=&testnotin=&diagnosisin=${data.diagListIn}&diagnosisnotin=`);
            if (response?.status === 200) {
                successCallback(response?.data?.CovidDetails)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const careLabTestListApi = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetTestListToViewOrVerifyInSummaryReport?sampleid=${data.sampleid}&fiscalyear=${data.fiscalyear}`);
            if (response?.status === 200) {
                successCallback(response?.data?.RecordList)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const careLabFiscalCodeApi = (successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetFiscalYearCodeList`);
            if (response?.status === 200) {
                successCallback(response?.data?.FIscalYearCode)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const careLabDiagnosisApi = (successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetDiagnosiGroupList`);
            if (response?.status === 200) {
                successCallback(response?.data?.DiagnosisGroup)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const dateWiseTestApi = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`GetDatewiseIncompleteSampleTestDetails?fromdate=${data.fromdate}&todate=${data.todate}`);
            if (response?.status === 200) {
                successCallback(response?.data?.IncompleteSampleList)
            } else
                successCallback([])
        } catch (error) {

        }
    }
}

export const GetListOfPatientDetailsBydateAndTest = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`${GetListOfPatientDetailsBydateAndTestDone}?fromdate=${data.fromdate}&todate=${data.todate}&testname=${data.testname}`);
            if(response?.status === 200){
                successCallback(response?.data?.PatientList)
                // console.log("response sucess", )
            }else{
                successCallback([])
                console.log("error")
            }
        }catch (error) {

        }
    }
}

// GetDatewiseSampleStatusOfEachTest

export const GetListOfPatientDetailsBydateAndTests = (data, successCallback) => {
    return async dispatch => {
        try {
            const response = await fetch(`${GetDatewiseSampleStatusOfEachTest}?fromdate=${data.fromdate}&todate=${data.todate}`);
            if(response?.status === 200){
                successCallback(response?.data?.TestWiseSampleStatus)
                // console.log("response sucess", response?.data)
            }else{
                successCallback([])
                console.log("error")
            }
        }catch (error) {

        }
    }
}