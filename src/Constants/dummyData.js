export const dummyDomain = {
  data: {
    HostedZones: [
      {
        Id: "/hostedzone/Z013466739SK5J0YBP8GA",
        Name: "example61.com.",
        CallerReference: "create-hosted-zone-1713015024298",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z026181333B2XZZ2FT890",
        Name: "example2.com.",
        CallerReference: "create-hosted-zone-1713063874773",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 5,
      },
      {
        Id: "/hostedzone/Z0122273LHYGNIZ1BBOL",
        Name: "eg.com.",
        CallerReference: "76724c1a-548f-4211-ba6c-2288925c7f68",
        Config: {
          Comment: "",
          PrivateZone: false,
        },
        ResourceRecordSetCount: 3,
      },
      {
        Id: "/hostedzone/Z1013015113LOS2N6S2VW",
        Name: "www.exampl46.com.",
        CallerReference: "create-hosted-zone-1713021011377",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z10424241LNPQIJI65KQU",
        Name: "www.example77.com.",
        CallerReference: "create-hosted-zone-1713030521880",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z0583121PQVJOG8BHK3",
        Name: "example3.com.",
        CallerReference: "create-hosted-zone-1713063875873",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z09593261JR0BPP22XCEK",
        Name: "example1.com.",
        CallerReference: "create-hosted-zone-1712864429590",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z03414682XV3PMEMLD27Y",
        Name: "example5.com.",
        CallerReference: "create-hosted-zone-1713063873714",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
      {
        Id: "/hostedzone/Z050589614AIR81CSU86V",
        Name: "www.example45.com.",
        CallerReference: "create-hosted-zone-1713021039998",
        Config: {
          PrivateZone: false,
        },
        ResourceRecordSetCount: 2,
      },
    ],
    IsTruncated: false,
    MaxItems: "100",
  },
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
