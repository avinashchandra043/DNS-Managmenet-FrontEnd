export const dummyDomain = {
  HostedZones: [
    {
      Id: "/hostedzone/Z1234567890DOMAIN01",
      Name: "example01.com.",
      CallerReference: "dummy-caller-reference-01",
      Config: {
        Comment: "Domain 1",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 10,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN02",
      Name: "example02.com.",
      CallerReference: "dummy-caller-reference-02",
      Config: {
        Comment: "Domain 2",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 12,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN03",
      Name: "example03.com.",
      CallerReference: "dummy-caller-reference-03",
      Config: {
        Comment: "Domain 3",
        PrivateZone: true,
      },
      ResourceRecordSetCount: 15,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN04",
      Name: "example04.com.",
      CallerReference: "dummy-caller-reference-04",
      Config: {
        Comment: "Domain 4",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 20,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN05",
      Name: "example05.com.",
      CallerReference: "dummy-caller-reference-05",
      Config: {
        Comment: "Domain 5",
        PrivateZone: true,
      },
      ResourceRecordSetCount: 8,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN06",
      Name: "example06.com.",
      CallerReference: "dummy-caller-reference-06",
      Config: {
        Comment: "Domain 6",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 13,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN07",
      Name: "example07.com.",
      CallerReference: "dummy-caller-reference-07",
      Config: {
        Comment: "Domain 7",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 9,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN08",
      Name: "example08.com.",
      CallerReference: "dummy-caller-reference-08",
      Config: {
        Comment: "Domain 8",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 14,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN09",
      Name: "example09.com.",
      CallerReference: "dummy-caller-reference-09",
      Config: {
        Comment: "Domain 9",
        PrivateZone: true,
      },
      ResourceRecordSetCount: 11,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN10",
      Name: "example10.com.",
      CallerReference: "dummy-caller-reference-10",
      Config: {
        Comment: "Domain 10",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 17,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN11",
      Name: "example11.com.",
      CallerReference: "dummy-caller-reference-11",
      Config: {
        Comment: "Domain 11",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 21,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN12",
      Name: "example12.com.",
      CallerReference: "dummy-caller-reference-12",
      Config: {
        Comment: "Domain 12",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 19,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN13",
      Name: "example13.com.",
      CallerReference: "dummy-caller-reference-13",
      Config: {
        Comment: "Domain 13",
        PrivateZone: true,
      },
      ResourceRecordSetCount: 16,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN14",
      Name: "example14.com.",
      CallerReference: "dummy-caller-reference-14",
      Config: {
        Comment: "Domain 14",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 22,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN15",
      Name: "example15.com.",
      CallerReference: "dummy-caller-reference-15",
      Config: {
        Comment: "Domain 15",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 7,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN16",
      Name: "example16.com.",
      CallerReference: "dummy-caller-reference-16",
      Config: {
        Comment: "Domain 16",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 18,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN17",
      Name: "example17.com.",
      CallerReference: "dummy-caller-reference-17",
      Config: {
        Comment: "Domain 17",
        PrivateZone: true,
      },
      ResourceRecordSetCount: 13,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN18",
      Name: "example18.com.",
      CallerReference: "dummy-caller-reference-18",
      Config: {
        Comment: "Domain 18",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 12,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN19",
      Name: "example19.com.",
      CallerReference: "dummy-caller-reference-19",
      Config: {
        Comment: "Domain 19",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 23,
    },
    {
      Id: "/hostedzone/Z1234567890DOMAIN20",
      Name: "example20.com.",
      CallerReference: "dummy-caller-reference-20",
      Config: {
        Comment: "Domain 20",
        PrivateZone: false,
      },
      ResourceRecordSetCount: 10,
    },
  ],
  IsTruncated: false,
  MaxItems: "100",
};

export const dummyRecord = [
  {
    Name: "example.com.",
    Type: "A",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "192.0.2.10",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "AAAA",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "2001:db8::10",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "MX",
    TTL: 600,
    ResourceRecords: [
      {
        Value: "10 mail.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "CNAME",
    TTL: 600,
    ResourceRecords: [
      {
        Value: "www.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "TXT",
    TTL: 300,
    ResourceRecords: [
      {
        Value: '"v=spf1 include:spf.example.com -all"',
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "NS",
    TTL: 172800,
    ResourceRecords: [
      {
        Value: "ns1.example.com.",
      },
      {
        Value: "ns2.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "SOA",
    TTL: 900,
    ResourceRecords: [
      {
        Value:
          "ns1.example.com. hostmaster.example.com. 1 7200 900 1209600 86400",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "PTR",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "1.2.0.192.in-addr.arpa",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "SRV",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "10 20 80 service.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "A",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "192.0.2.20",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "AAAA",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "2001:db8::20",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "MX",
    TTL: 600,
    ResourceRecords: [
      {
        Value: "20 mail.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "CNAME",
    TTL: 600,
    ResourceRecords: [
      {
        Value: "blog.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "TXT",
    TTL: 300,
    ResourceRecords: [
      {
        Value: '"dmarc=policy=none"',
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "NS",
    TTL: 172800,
    ResourceRecords: [
      {
        Value: "ns3.example.com.",
      },
      {
        Value: "ns4.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "SOA",
    TTL: 900,
    ResourceRecords: [
      {
        Value:
          "ns3.example.com. hostmaster.example.com. 2 7200 900 1209600 86400",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "PTR",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "1.2.0.192.in-addr.arpa",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "SRV",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "20 30 443 api.example.com.",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "A",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "192.0.2.30",
      },
    ],
  },
  {
    Name: "example.com.",
    Type: "AAAA",
    TTL: 300,
    ResourceRecords: [
      {
        Value: "2001:db8::30",
      },
    ],
  },
];
