import type { Investment, Recommendation, Project } from "./types";

export const INVESTMENTS: Investment[] = [
  {
    id: "1",
    name: "Urban Farm Collective",
    location: "Austin, TX",
    distance: "Within 5 mi",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBalbC2xF0zoj8WRJw5FFd1zRaIto99L52FqkF62GkZDTOeH7SPy_7HVnWHu3ashtnNGubf9Upau_c4UxKfWNQCdCZY0qLcLGmlJVKXayfDvyU9F_z3rpN3z244-F43wb-fwOKgDeonMNLFAXh2MdirpU9OcslHEol43-EDSoCv7HRZliyPP4HDLuPSydopHpKTZKm-z0A17dpIx6o62NZkl3teCsCk0eVndAOOnpk6KiZH29jz6zJlqSI_3661aSz6GOKLnQlNHQzN",
    milestoneCurrent: 2,
    milestoneTotal: 4,
    milestoneStatus: "Verified",
    amount: 5000,
    status: "Verified",
  },
  {
    id: "2",
    name: "Solar for Schools",
    location: "Oakland, CA",
    distance: "12 mi away",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvRoilulN7rgN5-YUWUvw2ykGgZ_6npzoyl2FUTWxCrNDHGIeBxmNaC5YthpMoMyr1QKV9HDDbvHCcMHs-nYvIAA4B55qA_KJXDPmzuJGrVOMdcNULitXqpZwmB5wTUd2_AOnyxzBDdHI_n8vlfSbarvC5fgSDY-tIv6Ku9bip3u1AT-IInumrdjCPkVGM0FaXJfspWMosyq9HDSPUe9_gPQsTp6w2h4Sco5yn9-NMmBoceyBXY9VUTMRt5fBkhF00A1FX-oUrtqKM",
    milestoneCurrent: 1,
    milestoneTotal: 3,
    milestoneStatus: "Pending Review",
    amount: 12400,
    status: "Reviewing",
  },
  {
    id: "3",
    name: "River Cleanup Initiative",
    location: "Portland, OR",
    distance: "8 mi away",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGvgsUxKQ21OtAVTKsngaUMpLAsUPlDXiKSfh5AYjoQ5ZtC_O8Y8fZ9EG9gUdJqD4afFX7B03qV8PXhEZQavKS2hWw6LxiLrdzZ0mzsM_PY805DFDtyj_2glUunb8dotwEakTGFase1ILS2N86Ixo4QJNdxShHvXny7HT_byQO2lj1G8TH8EKILMAduy60zBdAPx0VYSpj9vPIjzeEZeh3AEM5PjB0grv3SwzIAzF40UdESGwQZWsFEtDsw4q4v6i_p7Ba2rcoQ8S",
    milestoneCurrent: 3,
    milestoneTotal: 3,
    milestoneStatus: "Ready to Release",
    amount: 2100,
    status: "Verified",
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "1",
    name: "Tech for Elders",
    matchPercentage: 98,
    description:
      "Providing digital literacy workshops for seniors in the downtown area.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJoyjiucJHTsSNgl_-D_y1UMG0WD2cOKQ2q7oL4AzzOy9g7KKJ0jwgUiaYOWhTMso6mN6QNR8SWkmsws7LUn3mWOwqmYWNxZJu6k_S0qnpKjgqGk_rrxR3jg4YO-rpiiCk3iVxvLhzge0kFimTYk2-kTEsC2pM0AK7mVmpNn_pyjAzRcNkQTG-hehTznTXo0VslKw0m4iRwGt_5eBf1KIep891-LC9eIjqpHMnZD7eyHP__y71Ie9vCefz04fTESAXe-TgC8XZwRvv",
    raised: 8000,
    goal: 10000,
  },
  {
    id: "2",
    name: "Green Roofs Initiative",
    matchPercentage: 85,
    description: "Installing rooftop gardens on 5 local community centers.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8f2MsccKTNubpP7cyye2aL5vWfCztQmjJ_CKxRF1jRYXiZhDx2yOn1zeyD8nKXNfwVfqDDVKHvMplBq7QfXhZ39QAMEloVdV6DHIrHYGl38P1OJGvN22Br0FiPqOd8m8T-lSNCP7zPGMHCYXJ1EWZmTUnb3YbgRuzIXKkCDRdkwfbpgxeCqDqsWjFj_R-6Cw8EhUhOZrWJ5WJTODdppLEhxo-bBpQFs7-lq4IFZdoNy24b_fzCzetlAUnbQSVj-5nVD_IQXbgVEM6",
    raised: 2000,
    goal: 25000,
  },
];

export const FEATURED_PROJECT: Project = {
  id: "featured-1",
  title: "Urban Vertical Gardens",
  author: "City Arts Collective",
  isVerified: true,
  category: "Urban Farming",
  raised: 12450,
  goal: 15000,
  matchEstimate: 3200,
  contributors: 0,
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCM2CnIlfXAs8viKXtmaPfHoqdngBnS0ZthAluLn5RK5pJIxuqnSsQNFyKPN76EzkZWRaau_NOk5NRQG_J0y64DLmdKjI7q7K4504cwxQRobnAAM_TTkLLH8yARqSzRKRPSudt5B__SnWVGUp38hcj12tsDkvE-YMi22gpYXPUgVtSYbZAFtOtQ_ygn6W-mS80JcdYKDfxCR-caWnZrr4-kdXqIE_H1MnrnbJ7l0TLoTaJuLr_AWlHbZ5ibUmK5bJHR0hdiPCXgDPo",
  description: "Transforming unused city walls into sustainable food sources.",
  endsIn: "3d",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Tech4Kids Initiative",
    author: "Future Coders Inc.",
    isVerified: true,
    category: "Education",
    raised: 8400,
    goal: 10000,
    matchEstimate: 1200,
    contributors: 156,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtoTSv8bVomvMP3t9A86arkGRb6DifdeTyaM1A_hhXOz7gC5Dm0rNrZxS7AQyLhmQ8fRa7ejXEXf22a_SG1jvyoZ9HYdY8DlXYjwxrweCCeXEkEjJ5NrUWVE7QjHNbDDmf2HoI_zQTFQ7EqJ1KqbPCO99FrqhPq3i_5v8leHQOiQJOK_n-LeMfGgdvB8VWPRX2_0XoVZt9ot8UglS8sTqZGnyhoWBtu0HEe0aFjBjQx6DVIyPAYTzQAw4AOxHMiXBfrnv5HT2LvVL",
    status: "Active",
  },
  {
    id: "2",
    title: "Community Solar Hub",
    author: "Green Energy Co-op",
    isVerified: true,
    category: "Environment",
    raised: 2100,
    goal: 15000,
    matchEstimate: 450,
    contributors: 42,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMtlroK_WIJiM1K05Ccp0D5MBNVOyo-fHmpZnrKShUxWUUeDTe6kz7Hvc9dNLbqF1AKebMP2-Yc86cf6in8Ag9dO8hfQCtKe5_pavReFV8b94_7y409hWl2UYTBvth3Tv8VDtN-9A3jcFjqlHiTX5saSgtJlTmn-EDMgQB0ZcyVQv6CKIu8-3BOy2xLczlGN000V2cvUjZ_6Kf3728u8aw-TNmtdlK5ufFDO34Z7zmHtQ2ZTEgCGzOM7TRuZWegwmohZVmsREdwSo0",
    status: "Active",
  },
  {
    id: "3",
    title: "Downtown Mural Project",
    author: "City Arts Collective",
    isVerified: false,
    category: "Arts & Culture",
    raised: 4800,
    goal: 5000,
    matchEstimate: 890,
    contributors: 89,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9rznxoMgMAJ4UF80RrNU3qHeDlmct7RzoRA-oBp1xHbEERA2qZ2B6yOCquNab3kswKVL5FYOR51zMSxyXPIqnSWe9HwCiRF2MUdm8mcJPDsSlvnYHVXpIs8coqgns7ZistPbWQd1i4a_cvKCgdYO__SgA-l_pRI2S87rqgRTH4uQKlnFXI7Kuo5h4IZ_dhRSZyInpdi5mal8tsDf9xMlBYn7e0P2tkFQLoVjX9x0g_nqFpj12c2uQX5oi2JOy-GlxX_BxgdnR4G2U",
    status: "Active",
  },
  {
    id: "4",
    title: "Safe Routes to School",
    author: "Urban Mobility Group",
    isVerified: true,
    category: "Infrastructure",
    raised: 15200,
    goal: 20000,
    matchEstimate: 3500,
    contributors: 210,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBx50D1idVvvsvonkGqre6y3WEvMdatCIBrXUc9LfNQixiFoa3Z6YJ5uJCkhB04u8uxf1RxHG6d5NcHfH6z1MTKox-MACk1cvSbt4YjvCkqTM8-4rV4stuBfFXJgEpAH56VeDGVMva-9a1b9hgp6dyRELYXuM2_2btG1eY4v1i0AeSP2-BP_Q1A0l_dbeo90RBLpwujFNuRSwPrKqkIqwf2bxGTE_wZtVNz5QNEibQi1eqxfXW3YMbPgd5f3b1HkdA3wbmexpgecHjk",
    status: "Active",
  },
  {
    id: "5",
    title: "Neighborhood Food Bank",
    author: "Community Care",
    isVerified: true,
    category: "Food Security",
    raised: 5000,
    goal: 5000,
    matchEstimate: 0,
    contributors: 105,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR3sAeya3SikfmeQS0h1jWzY8mMtiV2_dhFPynV7wswu4PdHzu4q_NZdAL4cYgZkBCFQBqqyeEpHo5TviFC39-iAzdVCc7qDmOpKbyqEXVV0VHQxQKNtgzfVEYUWHukT4VaMcfhz9KWHP9uXPTMLlHNe0txKnJhv6gGFGIe0Tg0dMIVcffnrKWIC5VRRdF7aAQwwscNDQMncHba5d_CUe5BGKgDtazjqYHb3kWqrophanA6hDx-jt1tt3dsQoxASFZEN3nUnXZBhd-",
    status: "Milestone Pending",
  },
  {
    id: "6",
    title: "Open Data Portal",
    author: "Civic Tech Labs",
    isVerified: true,
    category: "Technology",
    raised: 3400,
    goal: 12000,
    matchEstimate: 1450,
    contributors: 76,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuRWA8RKlF9z70brMFmma30CqTlRP8iwIYxRMRJQI086uEW3PLDqTfVF4GUAwypmRBh6byg_FEIprPE5bf5--_pVwtJzubztrG8zyZLQpBci5pzEuK1S3psZ5gbHCrp2D-f2jetiGABTXkVpFRRbGddtJcLdRRv3YEr5VBAXJBH_pATZRZctDXL-lIXhdavwZWqunvuhvA77d7XYTJPQ9ouBpeKptUiwrPDxQZQ3Ya0h8pG_ROci0R6-o1KX1zAS9z7zLeOGbSGCZJ",
    status: "Active",
  },
];

export const PROJECT_CATEGORIES: string[] = [
  "Urban Farming",
  "Education",
  "Clean Infrastructure",
  "Local Arts",
  "Open Source Tech",
  "Technology",
  "Environment",
  "Arts & Culture",
  "Infrastructure",
  "Food Security",
];
