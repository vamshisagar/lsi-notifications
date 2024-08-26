const intialLsiData = [
    {
        team: "Application Insights",
        status: "Investigating",
        lsi: "1",
        startTime: "2024-08-01T12:06",
        endTime: "",
        impactType: "Data Loss",
        locations: "East-Us",
        subject: "Application Insights in East-Us is Experiencing Data Loss",
        description:
            "Application Insights in East-Us is Experiencing Data Loss. We are aware of the issue and currently investigating it.",
        customerImpact: "",
        nextUpdate: "1hr",
        driEngaged: "Vamshi",
        azureCri: "",
        recipients: "",
        lsiHtml:
            '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid rgb(222, 226, 230);"><tbody><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Status</td><td style="background-color: red; color: white; padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Investigating</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">LSI Number</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">1</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Team</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Start Time</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2024-08-01T12:06</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Impact Type</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Data Loss</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Locations</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">East-Us</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Subject</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in East-Us is Experiencing Data Loss</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Description</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in East-Us is Experiencing Data Loss. We are aware of the issue and currently investigating it.</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Next Update</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">1hr</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">DRI Engaged</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Vamshi</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Azure CRI</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Email Recipients</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr></tbody></table>',
    },
    {
        team: "Application Insights",
        status: "Mitigated",
        lsi: "123",
        startTime: "2024-08-01T12:14",
        endTime: "2024-08-01T12:16",
        impactType: "Alerting Failure",
        locations: "West-Us",
        subject:
            "Application Insights in West-Us is Experiencing Alerting Failure",
        description: "Issue Stands Mitigated",
        customerImpact: "",
        nextUpdate: "2hr",
        driEngaged: "Vamshi",
        azureCri: "",
        recipients: "",
        lsiHtml:
            '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;"><tbody><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Status</td><td style="background-color: green; color: white; padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Mitigated</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">LSI Number</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">123</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Team</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Start Time</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2024-08-01T12:14</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">End Time</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2024-08-01T12:16</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Impact Type</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Locations</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">West-Us</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Subject</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in West-Us is Experiencing Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Description</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Issue Stands Mitigated</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">DRI Engaged</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Vamshi</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Azure CRI</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Email Recipients</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr></tbody></table><br><hr><br><table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;"><tbody><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Status</td><td style="background-color: yellow; padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Mitigating</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">LSI Number</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">123</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Team</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Start Time</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2024-08-01T12:14</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Impact Type</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Locations</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">West-Us</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Subject</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in West-Us is Experiencing Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Description</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in West-Us is Experiencing Alerting Failure. We are aware of the issue and currently applied hot fix and its in Mitigating stage</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Next Update</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2hr</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">DRI Engaged</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Vamshi</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Azure CRI</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Email Recipients</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr></tbody></table><br><hr><br><table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid rgb(222, 226, 230);"><tbody><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Status</td><td style="background-color: red; color: white; padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Investigating</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">LSI Number</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">123</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Team</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Start Time</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">2024-08-01T12:14</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Impact Type</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Locations</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">West-Us</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Subject</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in West-Us is Experiencing Alerting Failure</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Description</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Application Insights in West-Us is Experiencing Alerting Failure. We are aware of the issue and currently investigating it.</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Next Update</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">1hr</td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">DRI Engaged</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Azure CRI</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr><tr><td style="width: 30%; background-color: rgb(249, 249, 249); padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);">Email Recipients</td><td style="padding: 0.5rem 1.5rem; border: 1px solid rgb(221, 221, 221);"></td></tr></tbody></table>',
    },
];

export default intialLsiData;
